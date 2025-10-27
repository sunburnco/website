<script lang="ts">
	import { LucideHand } from '@lucide/svelte';
	import { onMount } from 'svelte';

	import UIWindow from './UIWindow.svelte';

	const themes = [
		['sunburn-day', 'sunburn-day'],
		['sunburn-night', 'sunburn-night'],
		['sunburn-oasis', 'sunburn-sunset'],
		['sunburn-verdant', 'sunburn-lilac'],
		['sunburn-day', 'sunburn-oasis']
	];

	let i = $state(0);
	let activeTheme = $derived(themes[i]);

	onMount(() => {
		const interval = setInterval(() => {
			i = (i + 1) % themes.length;
		}, 3_000);

		return () => clearInterval(interval);
	});

	let parentWidth = $state(0);
	let parentHeight = $state(0);
</script>

<div
	class="flex aspect-video w-full flex-col items-stretch bg-base-300 transition-all duration-1000"
	style="box-shadow: inset 0 0 6rem rgb(0 0 0 / 0.2);"
	data-theme={activeTheme[0]}
	bind:clientWidth={parentWidth}
	bind:clientHeight={parentHeight}
>
	<div class="relative grow">
		<UIWindow {parentWidth} {parentHeight} x={2} y={8} w={20} h={24} />
		<UIWindow {parentWidth} {parentHeight} x={12} y={40} w={30} h={36} theme={activeTheme[1]} />
		<UIWindow {parentWidth} {parentHeight} x={50} y={30} w={30} h={48}>
			<div class="flex h-full w-full items-center justify-center gap-1 p-1 text-sm sm:text-base">
				<LucideHand class="size-4" />
				<span class="hidden md:inline">Move me</span>
			</div>
		</UIWindow>
	</div>
	<div
		class="box-border flex h-1/12 border-t border-base-content/50 bg-base-100 p-px transition-all duration-1000 sm:p-0.5"
	>
		<div
			class="box-border aspect-square overflow-hidden rounded-box border border-base-content/50 transition-all duration-1000"
		>
			<img src="/sunburn.svg" class="" />
		</div>
	</div>
</div>
