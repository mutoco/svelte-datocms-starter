<script lang="ts">
import { routeStore } from '$stores/routes.svelte';
import { onMount } from 'svelte';
import { locales, defaultLocale } from "$helpers/locales";
import { goto } from '$app/navigation';

const { data, children } = $props();

if (data?.routes) {
	routeStore.set(data.routes);
}
</script>

<main>
	{@render children()}
</main>
