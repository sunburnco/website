<script lang="ts">
	import { onMount } from 'svelte';

	import LucideSunburn from '$lib/LucideSunburn.svelte';

	const themes = [
		'sunburn-day',
		'sunburn-night',
		'sunburn-oasis',
		'sunburn-verdant',
		'sunburn-lilac',
		'sunburn-sunset',
	];

	let i = $state(0);
	const activeTheme = $derived(themes[i]);

	onMount(() => {
		const interval = setInterval(() => {
			i = (i + 1) % themes.length;
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<div
	data-theme={activeTheme}
	class="aspect-video"
	style="box-shadow: inset 0 0 6rem rgb(0 0 0 / 0.2);"
>
	<div
		class="flex size-full items-stretch bg-base-100 text-base-content transition-all duration-1000"
	>
		<div class="flex h-full w-8 shrink flex-col bg-base-100 transition-all duration-1000">
			<div
				class="mx-auto flex size-7.75 items-center justify-center bg-base-100 text-base-content transition-all duration-1000"
			>
				<LucideSunburn />
			</div>
			<div
				class="mx-auto box-border h-px w-[70%] border-t border-base-content/50 transition-all duration-1000"
			></div>
		</div>
		<div
			class="flex h-full w-24 flex-col justify-between border-x border-base-content/50 bg-base-200 transition-all duration-1000"
		>
			<div class="h-8 border-b border-base-content/50 bg-base-100 transition-all duration-1000"
			></div>
			<div class="h-7 border-t border-base-content/50 bg-base-100 transition-all duration-1000"
			></div>
		</div>
		<div class="flex grow flex-col items-stretch">
			<div
				class="h-5 shrink-0 border-b border-base-content/50 bg-base-200 transition-all duration-1000"
			></div>
			<div
				class="flex grow items-end justify-center gap-1 bg-base-300 p-1 transition-all duration-1000"
			>
				<div
					class="h-6 grow rounded-box border border-base-content/50 bg-base-100 transition-all duration-1000"
				></div>
				<div class="size-6 rounded-box bg-primary transition-all duration-1000"></div>
			</div>
		</div>
	</div>
</div>
