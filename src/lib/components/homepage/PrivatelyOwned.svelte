<script lang="ts">
	import { LucideMessagesSquare, LucideUser } from '@lucide/svelte';
</script>

<div
	data-theme="sunburn-day"
	class="dots-100 relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-box"
	style="box-shadow: inset 0 0 6rem rgb(0 0 0 / 0.2);"
>
	<a
		href="https://github.com/orgs/sunburnco/discussions"
		target="_blank"
		class="flex link items-center gap-2 text-xl text-neutral link-hover"
	>
		<LucideMessagesSquare size="1.5rem" /> Join the Discussion
	</a>

	<div class="animate-float absolute top-1/3 left-1/6 -translate-1/2 text-secondary/50">
		<div class="size-5 sm:size-8 md:size-5 lg:size-8">
			<LucideUser size="100%" class="drop-shadow-md" />
		</div>
	</div>
	<div class="animate-float2 absolute top-1/3 left-5/6 -translate-1/2 text-secondary/70">
		<div class="size-5 sm:size-8 md:size-5 lg:size-8">
			<LucideUser size="100%" class="drop-shadow-md" />
		</div>
	</div>
	<div class="animate-float3 absolute top-2/3 left-1/6 -translate-1/2 text-secondary/70">
		<div class="size-5 sm:size-8 md:size-5 lg:size-8">
			<LucideUser size="100%" class="drop-shadow-md" />
		</div>
	</div>
	<div class="animate-float4 absolute top-2/3 left-5/6 -translate-1/2 text-secondary/50">
		<div class="size-5 sm:size-8 md:size-5 lg:size-8">
			<LucideUser size="100%" class="drop-shadow-md" />
		</div>
	</div>
</div>
