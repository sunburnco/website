<script lang="ts">
	import interact from 'interactjs';
	import type { Snippet } from 'svelte';

	import { clamp } from '$lib/utils/clamp';

	let {
		x = $bindable(0),
		y = $bindable(0),
		w,
		h,
		theme = '',
		parentWidth,
		parentHeight,
		children
	}: {
		x: number;
		y: number;
		w: number;
		h: number;
		theme?: string;
		parentWidth: number;
		parentHeight: number;
		children?: Snippet;
	} = $props();

	let el = $state<HTMLDivElement | null>(null);

	function dragMoveListener(event: { dx: number; dy: number }) {
		x = clamp(0, x + (event.dx / parentWidth) * 100, Infinity);
		y = clamp(0, y + (event.dy / parentHeight) * 100, Infinity);
	}

	$effect(() => {
		if (!el) return;

		interact(el).draggable({
			modifiers: [interact.modifiers.restrictRect({ restriction: 'parent' })],
			listeners: {
				move: dragMoveListener
			}
		});
	});
</script>

<div
	bind:this={el}
	data-theme={theme}
	style={`left:${x}%;top:${y}%;width:${w}%;height:${h}%;`}
	class={[
		'absolute rounded-box',
		'overflow-hidden border border-base-content/50 bg-base-300',
		'flex flex-col items-stretch',
		'shadow-sm',
		'select-none',
		'transition-[background-color,border-color,color] duration-1000'
	]}
>
	<div
		class="flex h-3 w-full min-w-0 shrink-0 grow-0 bg-base-100 px-px transition-[background-color,border-color,color] duration-1000"
	>
	</div>
	{#if children}
		{@render children()}
	{/if}
</div>
