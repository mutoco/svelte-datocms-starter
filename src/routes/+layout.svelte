<script lang="ts">
import { routeStore } from '$stores/routes.svelte';
import { onMount } from 'svelte';
import { locales, defaultLocale } from "$helpers/locales";
import { goto } from '$app/navigation';

const { data, children } = $props();

if (data?.routes) {
	routeStore.set(data.routes);
}

onMount(() => {
	const path = window.location.pathname;
	const hasLang = /^\/[a-z]{2}(\/|$)/.test(path);

	console.log('does it check always?');

	if (!hasLang) {
		// TODO: Get locale from Cookie
		const cookieLocale = null;

		const browserLocale = navigator.language.slice(0, 2).toLowerCase();

		let lang = cookieLocale || browserLocale || defaultLocale;

		if (!locales.includes(lang)) {
			lang = defaultLocale;
		}

		goto(`/${lang}`, { replaceState: true });
	}
});
</script>

<main>
	{@render children()}
</main>
