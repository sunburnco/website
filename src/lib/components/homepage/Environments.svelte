<script lang="ts">
	import { LucideBrickWallShield, LucideEthernetPort, LucideGlobe } from '@lucide/svelte';

	import LucideSunburn from '$lib/LucideSunburn.svelte';
</script>

<div
	class="group relative box-border aspect-video w-full overflow-hidden rounded-box border border-base-content bg-base-100"
>
	<div
		class="group/all relative grid h-full w-full grid-cols-3 grid-rows-1 *:transition-[top_left]"
	>
		<div
			data-theme="sunburn-sunset"
			class={[
				'peer/lan group/lan text-base-[oklch(0.9625_0.0476_90.06)] relative flex h-full flex-col items-center justify-center bg-[oklch(0.5188_0.1941_28.98)] transition-opacity',
			]}
			tabindex="-1"
			style="box-shadow: inset 0 0 4rem rgb(0 0 0 / 0.3);"
		>
			<div
				class="absolute top-1 left-1/2 -translate-x-1/2 text-lg font-bold sm:text-xl md:text-lg lg:text-xl"
			>
				LAN
			</div>
			<div class="size-8 sm:size-12 md:size-8 lg:size-12"></div>
			<div class="animate-float size-8 sm:size-12 md:size-8 lg:size-12">
				<LucideEthernetPort size="100%" />
			</div>
		</div>
		<div
			data-theme="sunburn-oasis"
			class={[
				'peer/internet group/internet relative flex h-full flex-col items-center justify-center bg-linear-to-b from-base-200 via-base-100 to-base-100 transition-opacity',
			]}
			tabindex="-1"
		>
			<div
				class="absolute top-1 left-1/2 -translate-x-1/2 text-lg font-bold sm:text-xl md:text-lg lg:text-xl"
			>
				Internet
			</div>
			<div class="size-8 sm:size-12 md:size-8 lg:size-12"></div>
			<div class="animate-float2 size-8 sm:size-12 md:size-8 lg:size-12">
				<LucideGlobe size="100%" />
			</div>
		</div>
		<div
			data-theme="sunburn-night"
			class={[
				'peer/airgap group relative flex h-full flex-col items-center justify-center bg-linear-to-r from-base-300 via-base-100 to-base-300 transition-opacity',
			]}
			tabindex="-1"
		>
			<div
				class="absolute top-1 left-1/2 -translate-x-1/2 text-lg font-bold sm:text-xl md:text-lg lg:text-xl"
			>
				Airgapped
			</div>
			<div class="size-8 sm:size-12 md:size-8 lg:size-12"></div>
			<div class="animate-float3 size-8 sm:size-12 md:size-8 lg:size-12">
				<LucideBrickWallShield size="100%" />
			</div>
		</div>

		<div
			class={[
				'pointer-events-none absolute top-5/12 left-1/6 size-8 -translate-x-1/2 -translate-y-1/2 stroke-[oklch(0.9625_0.0476_90.06)] transition-[top_left_stroke] sm:size-12 md:size-8 lg:size-12',
				'peer-hover/internet:left-1/2 peer-hover/internet:stroke-[oklch(0.22_0.12_210)]',
				'peer-focus/internet:left-1/2 peer-focus/internet:stroke-[oklch(0.22_0.12_210)]',
				'peer-hover/lan:left-1/6 peer-hover/lan:stroke-[oklch(0.9625_0.0476_90.06)]',
				'peer-focus/lan:left-1/6 peer-focus/lan:stroke-[oklch(0.9625_0.0476_90.06)]',
				'peer-hover/airgap:left-5/6 peer-hover/airgap:stroke-[oklch(0.9625_0.0476_90.06)]',
				'peer-focus/airgap:left-5/6 peer-focus/airgap:stroke-[oklch(0.9625_0.0476_90.06)]',
			]}
		>
			<LucideSunburn size="100%" color="inherit" />
		</div>
	</div>
</div>
