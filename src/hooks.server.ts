import { langMatcher } from '$helpers/locales'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const { url } = event;
    const match = url.pathname.match(langMatcher);
	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', match ? match[1] : "en"),
		filterSerializedResponseHeaders: name => name === 'content-type'
	});
	return response;
}