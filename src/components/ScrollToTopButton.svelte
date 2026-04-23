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
	class:hidden={!visible}
	class="fixed bottom-4 right-4 z-40 rounded-full border border-slate-200 bg-white/95 px-4 py-2 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-300/30 transition hover:text-ecOrange focus:outline-none focus:ring-2 focus:ring-ecOrange focus:ring-offset-2 lg:hidden"
	aria-hidden={!visible}
	tabindex={visible ? 0 : -1}
	aria-label="Scroll to top"
	on:click={handleClick}
>
	Top
</button>