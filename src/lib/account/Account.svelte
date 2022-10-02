<script>
  import Button from '../common/Button.svelte'
  import Supertag from '../supertags/Supertag.svelte'
  import account from './account'
  import SignUp from './signup/SignUp.svelte'
  import userdata from './userdata'
  import defaultUser from './default-user.png'
</script>

{#if $account.loggedIn}
  <div class="account-view">
    <div>
      <h2>Signed in as</h2>
      <div class="overview">
        <img class="profile-picture" src={$account.user.photoURL ?? defaultUser} alt="Profile" />
        <span class="name">{$account.user.displayName ?? 'Anonymous'}</span>
        <span>{$account.user.email}</span>
      </div>
    </div>
    <div>
      <h2>Your supertags</h2>
      <div class="supertags" />
      {#if $userdata.supertags.length === 0}
        <span>You don't have any supertags yet. You can create them when you have more than one tag active.</span>
      {/if}
      <ul>
        {#each $userdata.supertags as supertag}
          <Supertag {supertag} on:remove={(ev) => userdata.deleteSupertag(ev.detail)} />
        {/each}
      </ul>
    </div>

    <div>
      <h2>Actions</h2>
      <div class="actions">
        <Button text="Sign out" title="Click to sign out" on:click={() => account.signOut()} />
      </div>
    </div>
  </div>
{:else}
  <SignUp />
{/if}

<style>
  h2 {
    padding-block-start: 2rem;
    padding-block-end: 1rem;
  }

  .overview {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    column-gap: var(--grid-gap);
    row-gap: 4px;
    background-color: var(--background-1);
    border-radius: var(--border-radius);
    padding: var(--grid-gap);
  }

  .profile-picture {
    height: 4em;
    border-radius: 2em;
    grid-area: 1/1/3/2;
  }

  .account-view {
    display: flex;
    flex-direction: column;
    gap: var(--grid-gap);
  }

  .name {
    font-weight: bold;
    align-self: flex-end;
  }

  .actions {
    grid-area: 1/3/3/4;
  }

  ul {
    display: flex;
    flex-direction: column;
    background-color: var(--background-1);
    border-radius: var(--border-radius);
  }
</style>
