<script lang="ts">
    import Triangle from "./Triangle.svelte";

    let visible = false;

    $: hiddenCSS = visible ? ' display-the-button' : '';
</script>

<style>
    a {
        @apply transition-transform;
    }

    a:not(.display-the-button) {
        transform: translateY(-50%);
    }
</style>

<a class="absolute bottom-0 end-0 m-8 z-10{hiddenCSS}" href="#top">
    <div class="h-16 w-16 bg-ecOrange text-ecIconColor rounded-full flex items-center justify-center">
        <Triangle size={24}/>
    </div>
</a>