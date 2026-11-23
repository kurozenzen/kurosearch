<script lang="ts">
	import type { ClipboardEventHandler } from 'svelte/elements';
	import IconButton from '#lib/components/pure/button-icon/IconButton.svelte';
	import { apiKey, userId } from '#lib/store';

	const pasteHandler: ClipboardEventHandler<HTMLElement> = (event) => {
		const pastedText = event.clipboardData?.getData('text/plain') ?? '';

		const apiKeyRegex = /&api_key=([^&]+)/;
		if (apiKeyRegex.test(pastedText)) {
			const match = pastedText.match(apiKeyRegex);
			if (match && match[1]) {
				const apiKeyValue = match[1];
				apiKey.value = apiKeyValue;
				event.stopPropagation();
				event.preventDefault();
			}
		}
		const userIdRegex = /&user_id=([^&]+)/;
		if (userIdRegex.test(pastedText)) {
			const match = pastedText.match(userIdRegex);
			if (match && match[1]) {
				const userIdValue = match[1];
				userId.value = userIdValue;
				event.stopPropagation();
				event.preventDefault();
			}
		}
	};

	let userIdValid = $derived(userId.value.length > 0 && !isNaN(Number(userId.value)));
	let apiKeyValid = $derived(apiKey.value.length > 0 && /^[A-z0-9]+$/.test(apiKey.value));
</script>

<div>
	<form onpaste={pasteHandler}>
		<span>User Id:</span>
		<input
			name="user_id"
			type="text"
			bind:value={userId.value}
			placeholder="Paste credential here"
			autocomplete="off"
			onpaste={pasteHandler}
			class:valid={userIdValid}
		/>
		<span>API Key:</span>
		<input
			name="api_key"
			type="text"
			bind:value={apiKey.value}
			placeholder=""
			autocomplete="off"
			onpaste={pasteHandler}
			class:valid={apiKeyValid}
		/>
	</form>

	<IconButton
		class="mixin-invisible"
		onclick={() => {
			apiKey.value = '';
			userId.value = '';
		}}
	>
		<i class="codicon codicon-close"></i>
	</IconButton>
</div>

<style>
	div {
		display: flex;
		gap: var(--grid-gap);
	}
	form {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto;
		border-radius: var(--border-radius-small);
		background-color: var(--background-1);
		padding-inline: var(--grid-gap);

		overflow: hidden;
		align-items: center;
	}
	input {
		display: block;
		height: var(--box-height);
		background-color: var(--background-1);
		flex-grow: 1;

		&.valid {
			color: green;
		}

		&:not(.valid) {
			color: orange;
		}
	}
	span {
		text-align: right;
	}
</style>
