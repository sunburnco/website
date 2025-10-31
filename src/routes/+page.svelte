<script>
	import {
		LucideArrowDown,
		LucideArrowRight,
		LucideGithub,
		LucideHeart,
		LucideMail
	} from '@lucide/svelte';
	import { DateTime } from 'luxon';

	import { env } from '$env/dynamic/public';
	import Environments from '$lib/components/homepage/Environments.svelte';
	import Frontend from '$lib/components/homepage/Frontend.svelte';
	import NewsletterForm from '$lib/components/homepage/NewsletterForm.svelte';
	import OpenSource from '$lib/components/homepage/OpenSource.svelte';
	import PrivatelyOwned from '$lib/components/homepage/PrivatelyOwned.svelte';
	import AccentToBase100 from '$lib/components/homepage/transitions/AccentToBase100.svelte';
	import Base100ToBaseContent from '$lib/components/homepage/transitions/Base100ToBaseContent.svelte';
	import BaseContentToAccent from '$lib/components/homepage/transitions/BaseContentToAccent.svelte';
	import UI from '$lib/components/homepage/UI.svelte';

	const props = $props();
</script>

<svelte:head>
	<title>Sunburn</title>
</svelte:head>

<div
	data-theme="sunburn-day"
	class="grid min-h-svh w-full grid-cols-1 grid-rows-1 items-start justify-center bg-base-content text-base-100 lg:text-base-content"
>
	<div class="col-start-1 row-start-1 w-full">
		<img
			src="/sunburn.svg"
			class="w-full object-cover"
			alt="The Sunburn logo; two pyramids in the distance, partially occluded by rolling hills of red sand."
		/>
	</div>
	<div class="relative col-span-1 col-start-1 row-span-1 row-start-1">
		<div class="absolute end-2 top-2 flex sm:end-4 sm:top-4">
			<!-- TODO add floating UI tooltips -->
			<!-- <a title="Docs" target="_blank" class="btn btn-ghost text-neutral btn-square">
				<LucideBook class="size-3 sm:size-5" />
			</a> -->
			<a
				title="GitHub"
				href="https://github.com/sunburnco/sunburn"
				target="_blank"
				class="btn btn-square text-neutral btn-ghost"
			>
				<LucideGithub class="size-3 sm:size-5" />
			</a>
		</div>
		<div class="mt-8 flex h-svh flex-col items-center justify-center gap-4">
			<h1 class="text-6xl font-bold lg:text-8xl">Sunburn</h1>
			<h2 class="text-start font-mono text-xl font-bold lg:text-3xl">
				Chat, voice, and video, <br class="sm:hidden" />
				designed to self-host
			</h2>
			<div class="mt-4 flex gap-4">
				<a href="#learn" class="btn btn-soft lg:btn-xl">
					<LucideArrowDown class="size-4 lg:size-6" /> Learn
				</a>
				<a href={env.PUBLIC_CTA_LINK} class="btn btn-primary lg:btn-xl lg:btn-secondary">
					Go <LucideArrowRight class="size-4 lg:size-6" />
				</a>
			</div>
		</div>
	</div>
</div>

<div
	data-theme="sunburn-day"
	class="hero bg-base-content px-4 pt-0 pb-24 text-base-100 sm:pt-24"
	id="learn"
>
	<div class="hero-content flex-col justify-center gap-8 md:flex-row">
		<div class="flex w-full flex-col gap-4 text-xl md:w-1/2">
			<h1 class="text-start font-mono text-5xl font-bold md:text-start">Dope-Ass UI</h1>
			<p>
				Sunburn boasts a highly performant desktop-like UI where every call, channel, and server can
				be its own draggable, resizable window.
			</p>
			<p>
				Keep everything looking slick with one of six built-in themes, or break up the monotony with
				per-window theme configuration.
			</p>
		</div>
		<!-- TODO add img -->
		<!-- <img src="/sunburn.png" class="rounded-box aspect-video shadow-2xl md:max-w-md lg:max-w-lg" /> -->
		<div class="w-full overflow-hidden rounded-box border border-base-100/50 shadow-2xl md:w-1/2">
			<UI />
		</div>
	</div>
</div>

<BaseContentToAccent />

<div data-theme="sunburn-day" class="hero bg-accent px-4 pt-64 pb-24 text-base-content">
	<div class="hero-content flex-col-reverse justify-center gap-8 md:flex-row">
		<!-- TODO add img -->
		<div class="w-full overflow-hidden rounded-box shadow-2xl md:w-1/2">
			<Environments />
		</div>
		<div class="flex w-full flex-col gap-4 text-xl md:w-1/2">
			<h1 class="text-start font-mono text-5xl font-bold md:text-start">
				Your Instance,
				<br />
				Your Rules
			</h1>
			<p>
				Sunburn is designed to be hosted on your own hardware. It works perfectly on a LAN, on the
				internet, or in airgapped environments.
			</p>
		</div>
	</div>
</div>

<AccentToBase100 />

<div data-theme="sunburn-day" class="hero bg-base-100 px-4 pt-64 pb-24 text-base-content">
	<div class="hero-content flex-col justify-center gap-8 md:flex-row">
		<div class="flex w-full flex-col gap-4 text-xl md:w-1/2">
			<h1 class="text-start font-mono text-5xl font-bold md:text-start">
				One Frontend Serves <br class="hidden sm:block md:hidden lg:block" />
				All of Sunburn
			</h1>
			<p>
				The Sunburn webapp is multitenant, so a single instance can be a frontend for multiple
				backends. Connect with your friend group, your gaming community, and your coworkers &mdash;
				all from one tab.
			</p>
		</div>
		<div class="w-full overflow-hidden rounded-box shadow-2xl sm:min-w-sm md:w-1/2">
			<Frontend />
		</div>
	</div>
</div>

<Base100ToBaseContent />

<div data-theme="sunburn-day" class="hero bg-base-content px-4 pt-64 pb-24 text-base-100">
	<div class="hero-content flex-col-reverse justify-center gap-8 md:flex-row">
		<div class="w-full overflow-hidden rounded-box shadow-2xl sm:min-w-sm md:w-1/2">
			<OpenSource />
		</div>
		<div class="flex w-full flex-col gap-4 text-xl md:w-1/2">
			<h1 class="text-start font-mono text-5xl font-bold md:text-start">
				Sunburn <LucideHeart
					class="inline size-10 -translate-y-1.5 fill-primary"
					aria-label="heart"
				/>
				<br />
				Fair Source
			</h1>
			<p>
				We can't call it "open source" because we released Sunburn under the
				<a href="https://fsl.software" target="_blank" class="link">
					Functional Source License (MIT edition)
				</a>
				, a license created by Sentry for their core offerings.
			</p>
			<p>
				TL;DR: you have our permission to run Sunburn personally or professionally, publicly or
				privately, on-prem or in the cloud. The only thing we ask is that you don't offer
				Sunburn-as-a-service without our written approval.
			</p>
			<p>
				Check out <a href="https://fsl.software" target="_blank" class="link">the FSL website</a>
				to learn more about the license.
			</p>
		</div>
	</div>
</div>

<BaseContentToAccent />

<div data-theme="sunburn-day" class="hero bg-accent px-4 pt-64 pb-24 text-base-content">
	<div class="hero-content flex-col justify-center gap-8 md:flex-row">
		<div class="flex w-full flex-col gap-4 text-xl md:w-1/2">
			<h1 class="text-start font-mono text-5xl font-bold md:text-start">Privately Owned</h1>
			<p>
				Sunburn is a 100% privately owned passion project, meaning we work to please the community,
				not shareholders. Our roadmap is primarily dictated by what our users want to see.
			</p>
		</div>
		<div class="w-full overflow-hidden rounded-box shadow-2xl sm:min-w-sm md:w-1/2">
			<PrivatelyOwned />
		</div>
	</div>
</div>

<AccentToBase100 />

<div data-theme="sunburn-day" class="hero bg-base-100 px-4 pt-64 pb-24 text-base-content">
	<div class="hero-content flex-col-reverse justify-center gap-8 md:flex-row">
		<div
			class="flex w-full overflow-hidden rounded-box border border-base-content/50 shadow-2xl sm:min-w-sm md:w-1/2"
		>
			<NewsletterForm {...props} />
		</div>
		<div class="flex w-full flex-col gap-4 text-xl md:w-1/2">
			<h1 class="text-start font-mono text-5xl font-bold md:text-start">On the Horizon</h1>
			<p>
				<span class="font-semibold">
					Sunburn<span class="font-script text-sm text-secondary md:text-base">Auth</span>
				</span>
				is a free OIDC provider for Sunburn. You won't need to remember a different password for each
				Sunburn instance &mdash; just log in once and connect your accounts. We also plan to offer profile
				customization through
				<span class="font-semibold">
					Sunburn<span class="font-script text-sm text-secondary md:text-base">Auth</span>
				</span>
				.
			</p>
			<p>
				Don't want to self-host?
				<span class="font-mono">
					on.<span class="font-bold text-secondary">sb</span>
				</span>
				is our fully-managed Sunburn offering. We'll take care of backups, updates, and security, so
				all you have to do is start using it.
			</p>
			<p>
				We also plan to release bot frameworks, so you can bring your applications to the Sunburn
				ecosystem.
			</p>
		</div>
	</div>
</div>

<Base100ToBaseContent />

<footer
	data-theme="sunburn-day"
	class="footer bg-neutral px-12 pt-4 text-neutral-content sm:footer-horizontal"
>
	<aside>
		<img
			src="/sunburn.png"
			class="aspect-square max-w-32 rounded-box shadow-md"
			alt="The Sunburn logo"
		/>
	</aside>
	<nav>
		<h4 class="footer-title font-mono normal-case">Contact</h4>
		<a
			class="inline-flex link items-center gap-1 link-hover"
			href="https://github.com/sunburnco"
			target="_blank"
		>
			<LucideGithub size="1rem" /> GitHub
		</a>
		<a
			class="inline-flex link items-center gap-1 link-hover"
			href="mailto:hello@sunburn.co"
			target="_blank"
		>
			<LucideMail size="1rem" /> hello@sunburn.co
		</a>
	</nav>
	<nav>
		<h4 class="footer-title font-mono normal-case">Docs</h4>
		<a class="link link-hover">Coming soon!</a>
	</nav>
	<nav>
		<h4 class="footer-title font-mono normal-case">Legal</h4>
		<a class="link link-hover">Terms of Service</a>
		<a class="link link-hover">Privacy Policy</a>
	</nav>
</footer>
<footer
	data-theme="sunburn-day"
	class="footer-center footer bg-neutral p-4 text-center text-neutral-content"
>
	<p class="inline">
		&copy; {DateTime.now().year}
		<a href="https://github.com/twopyramids" class="inline link" target="_blank">twopyramids</a>.
		All rights reserved. | &ldquo;Sunburn,&rdquo; &ldquo;SunburnAuth,&rdquo; &ldquo;on.sb,&rdquo;
		and the &ldquo;Two Pyramids&rdquo; logomark are trademarks of
		<a href="https://github.com/twopyramids" class="inline link" target="_blank">twopyramids</a>.
	</p>
</footer>
