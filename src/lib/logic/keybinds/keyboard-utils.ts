import { SkipDirection, skipVideo, toggleMute, toggleVideo } from '$lib/store/active-video.svelte';

// Searchbar
export const keybindFocusSearchbar = (event: KeyboardEvent) =>
	!isInputFocused() && !event.ctrlKey && ['/', 's'].includes(event.key);
export const keybindBlur = (event: KeyboardEvent) => event.key === 'Escape';
export const keybindSearch = (event: KeyboardEvent) => event.ctrlKey && event.key === 'Enter';
export const keybindSearchbarSubmit = (event: KeyboardEvent) =>
	!event.ctrlKey && event.key === 'Enter';
export const keybindModifier = (event: KeyboardEvent) => event.ctrlKey && event.key === 'm';
export const keybindNextSuggestion = (event: KeyboardEvent) => event.key === 'ArrowDown';
export const keybindPrevSuggestion = (event: KeyboardEvent) => event.key === 'ArrowUp';

// Media
export const keybindPlay = (event: KeyboardEvent) => [' ', 'k'].includes(event.key);
export const keybindToggleMute = (event: KeyboardEvent) => event.key === 'm';
export const keybindSkipForward = (event: KeyboardEvent) => ['ArrowRight', 'l'].includes(event.key);
export const keybindSkipBackward = (event: KeyboardEvent) => ['ArrowLeft', 'j'].includes(event.key);

// Fullscreen
export const keybindFsEnter = (event: KeyboardEvent) =>
	!isInputFocused() && ['f', 'Enter'].includes(event.key);
export const keybindFsLeave = (event: KeyboardEvent) => ['f', 'Escape'].includes(event.key);
export const keybindDetails = (event: KeyboardEvent) => event.key === 'd';
export const keybindFsPrev = (event: KeyboardEvent) => event.key === 'ArrowUp' || event.key === 'u';
export const keybindFsNext = (event: KeyboardEvent) =>
	event.key === 'ArrowDown' || event.key === 'o';

// Post
export const keybindPostLinks = (event: KeyboardEvent) => !isInputFocused() && event.key === 'r';
export const keybindPostComments = (event: KeyboardEvent) => !isInputFocused() && event.key === 'c';
export const keybindPostTags = (event: KeyboardEvent) => !isInputFocused() && event.key === 't';
export const keybindPostFavourite = (event: KeyboardEvent) =>
	!isInputFocused() && event.key === 'h';

// Results
export const keybindResultsPrev = (event: KeyboardEvent) =>
	!isInputFocused() && ((event.ctrlKey && event.key === 'ArrowUp') || event.key === 'u');
export const keybindResultsNext = (event: KeyboardEvent) =>
	!isInputFocused() && ((event.ctrlKey && event.key === 'ArrowDown') || event.key === 'o');

export const isInputFocused = () =>
	document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA';

export const keybindsVideo = async (event: KeyboardEvent) => {
	if (isInputFocused()) {
		return;
	}

	if (keybindPlay(event)) {
		if (await toggleVideo()) {
			event.preventDefault();
			event.stopPropagation();
		}
	}

	if (keybindSkipBackward(event)) {
		if (skipVideo(undefined, SkipDirection.Backward)) {
			event.preventDefault();
			event.stopPropagation();
		}
	}

	if (keybindSkipForward(event)) {
		if (skipVideo(undefined, SkipDirection.Forward)) {
			event.preventDefault();
			event.stopPropagation();
		}
	}

	if (keybindToggleMute(event)) {
		event.preventDefault();
		event.stopPropagation();
		toggleMute();
	}
};
