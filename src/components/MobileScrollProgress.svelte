<script lang="ts">
	export let progress = 0;

	const boundedProgress = Math.max(0, Math.min(progress, 100));
</script>

<div class="pointer-events-none fixed inset-x-0 top-0 z-40 h-1 bg-white/70 backdrop-blur-sm lg:hidden" aria-hidden="true">
	<div class="h-full bg-ecOrange transition-[width] duration-150 ease-out" style={`width: ${boundedProgress}%`}></div>
</div>