import { type Actions, fail } from '@sveltejs/kit';

import { env } from '$env/dynamic/private';
import { CF_TURNSTILE_SECRET, LM_NEWSLETTER_ID, LM_TOKEN, LM_USERNAME } from '$env/static/private';
import { validateToken } from '$lib/turnstile/validateToken';

export const actions: Actions = {
	subscribe: async ({ request }) => {
		const data = await request.formData();

		const token =
			typeof data.get('cf-turnstile-response') !== 'string'
				? ''
				: (data.get('cf-turnstile-response') as string);

		const { success, error } = await validateToken(token, CF_TURNSTILE_SECRET);

		if (!success) {
			return fail(400, { success: false, error });
		}

		const Authorization = `Basic ${btoa(`${LM_USERNAME}:${LM_TOKEN}`)}`;

		const res = await fetch(new URL('/api/subscribers', env.LM_BASE_URL), {
			headers: {
				Authorization,
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify({
				email: data.get('email'),
				name: data.get('email'),
				status: 'enabled',
				lists: [Number(LM_NEWSLETTER_ID)],
				attribs: {
					source: 'website',
				},
			}),
		});

		if (res.status !== 200) {
			// eslint-disable-next-line no-console
			console.error('error adding subscriber', await res.json());
			return fail(500, { success: false, error: 'upstream error' });
		}

		return { success: res.status === 200 };
	},
};
