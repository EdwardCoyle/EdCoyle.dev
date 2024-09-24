<script lang="ts">
	import ThinAccent from "./accents/thinAccent.svelte";

    export let footer = false;
    export let offset = true;
</script>

<header class="flex flex-row items-center mb-8 gap-4 overflow-hidden text-start max-w-680 lg:w-680">
    <ThinAccent offset={offset}/>
    {#if footer}
        <span class="whitespace-nowrap flex-grow-0 font-semibold font-serif">
            <slot></slot>
        </span>
    {:else}
        <h2 class="whitespace-nowrap flex-grow-0 text-2xl">
            <slot></slot>
        </h2>
    {/if}
    <ThinAccent />
</header>