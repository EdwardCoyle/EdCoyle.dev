<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let visible = false;

	const dispatch = createEventDispatcher<{ click: void }>();

	function handleClick() {
		dispatch('click');
	}
</script>

<button
	type="button"
	class:opacity-0={!visible}
	class:pointer-events-none={!visible}
	class="fixed top-4 right-4 z-50 rounded-full border border-slate-200 bg-white p-2 text-slate-600 shadow-lg shadow-slate-300/30 transition-opacity duration-200 hover:text-ecOrange focus:outline-none focus:ring-2 focus:ring-ecOrange focus:ring-offset-2"
	aria-hidden={!visible}
	tabindex={visible ? 0 : -1}
	aria-label="Scroll to top"
	on:click={handleClick}
>
	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		<polyline points="18 15 12 9 6 15"></polyline>
	</svg>
</button>