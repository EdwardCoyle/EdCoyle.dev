<script lang="ts">
    import Triangle from "./Triangle.svelte";
</script>

<li class="project-link text-sm flex flex-row gap-2 items-center text-bulletColor">
    <Triangle></Triangle>
    <slot></slot>
</li>