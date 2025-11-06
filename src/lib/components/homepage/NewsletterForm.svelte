<script lang="ts">
	import { LucideMailCheck, LucideNewspaper } from '@lucide/svelte';
	import { Turnstile } from 'svelte-turnstile';

	import { enhance } from '$app/forms';
	import { PUBLIC_CF_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { errorPrefix } from '$lib/logPrefixes';

	import { type PageProps } from '../../../routes/$types';

	let { form }: PageProps = $props();

	$effect(() => {
		if (form?.error) {
			// eslint-disable-next-line no-console
			console.error(
				...errorPrefix,
				'error during form submission: ',
				form.error,
				'\nCan Cloudflare Turnstile verify your browser?'
			);
		}
	});
</script>

<div data-theme="sunburn-day" class="flex size-full flex-col p-4 md:aspect-video">
	<h2 class="text-center font-display text-xl font-bold">Newsletter</h2>
	<div class="flex grow items-center">
		{#if !form?.success}
			<form
				method="POST"
				action="?/subscribe"
				class="flex grow flex-col justify-center gap-1"
				use:enhance
			>
				<fieldset class="fieldset w-full">
					<legend class="fieldset-legend">
						<span>Email <span class="text-primary" title="Required">*</span></span>
					</legend>
					<input
						type="email"
						name="email"
						class="input w-full text-neutral"
						placeholder="me@example.com"
						required
					/>
					{#if form?.error}
						<legend class="fieldset-label">
							<span class="text-error">
								Something went wrong. Please
								<a class="link" href="mailto:hello@sunburn.co">email us</a>
								if this issue persists.
							</span>
						</legend>
					{:else}
						<legend class="fieldset-label">Unsubscribe at any time</legend>
					{/if}
				</fieldset>

				<Turnstile
					siteKey={PUBLIC_CF_TURNSTILE_SITE_KEY}
					appearance="interaction-only"
					size="invisible"
					class="h-0"
				/>

				<button class="btn w-full btn-primary"><LucideNewspaper size="1rem" /> Subscribe</button>
			</form>
		{:else}
			<div class="flex grow items-center justify-center gap-2">
				<LucideMailCheck size="1rem" /> Thank you!
			</div>
		{/if}
	</div>
	<h2 class="invisible hidden font-display text-xl md:block">.</h2>
</div>
