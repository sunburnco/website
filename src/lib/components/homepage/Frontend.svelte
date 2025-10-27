<script lang="ts">
	import {
		LucideAppWindow,
		LucideBeer,
		LucideBriefcaseBusiness,
		LucideGamepad
	} from '@lucide/svelte';
</script>

<div
	class="group relative box-border aspect-video w-full overflow-hidden rounded-box border border-base-content/50 bg-radial from-base-200 via-base-200 to-base-100"
>
	<div class="absolute top-1/2 left-1/4 flex -translate-1/2 flex-col items-center justify-center">
		<div class="size-8 sm:size-12 md:size-8 lg:size-12">
			<LucideAppWindow size="100%" />
		</div>
		<span class="font-bold"> sb.friends.com </span>
	</div>

	<div
		class="-gap-2 animate-float absolute top-1/4 left-2/3 flex -translate-1/2 flex-col items-center justify-center text-primary"
	>
		<div class="size-6 sm:size-10 md:size-6 lg:size-10">
			<LucideBeer size="100%" class="drop-shadow-lg" />
		</div>
		<span class="-mt-1 text-sm font-bold text-nowrap drop-shadow-lg"> beer-bros.com </span>
	</div>

	<div
		class="-gap-2 animate-float2 absolute top-1/2 left-3/4 flex -translate-1/2 flex-col items-center justify-center text-success"
	>
		<div class="size-6 sm:size-10 md:size-6 lg:size-10">
			<LucideGamepad size="100%" class="drop-shadow-lg" />
		</div>
		<span class="-mt-1 text-sm font-bold text-nowrap drop-shadow-lg"> indie-game.on.sb </span>
	</div>

	<div
		class="-gap-2 animate-float3 absolute top-3/4 left-2/3 flex -translate-1/2 flex-col items-center justify-center text-secondary"
	>
		<div class="size-6 sm:size-10 md:size-6 lg:size-10">
			<LucideBriefcaseBusiness size="100%" class="drop-shadow-lg" />
		</div>
		<span class="-mt-1 text-sm font-bold text-nowrap drop-shadow-lg"> sunburn.company.com </span>
	</div>
</div>
