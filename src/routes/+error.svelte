<script lang="ts">
	import { page } from "$app/state";
	import { dev } from "$app/environment";
	import { routes } from '$stores/routes.svelte';

	const params = () => page.params;
	const status = () => page.status;
	const error = ()  => page.error;
	const locale = () => params().lang;

	const getTitle = (code: number) => {
		switch (code) {
			case 404:
				return `Page Not Found`;
			default:
				return `Error ${code}`;
		}
	};

	const getMessage = (code: number) => {
		switch (code) {
			case 404:
				return `This page doesnʼt seem to exist.<br>
					Go visit our <a href="${routes.getRouteByTitle(locale(), 'Index')?.path ?? '/'}">homepage</a> instead!`;
			default:
				return `An error occurred while trying to load this page.<br>
					Try refreshing the page or go back to the <a href="${routes.getRouteByTitle(locale(), 'Index')?.path ?? '/'}">homepage</a>.`;
		}
	};
</script>

<svelte:head>
	<title>{getTitle(status())}</title>
</svelte:head>

<section>
	<h1>{getTitle(status())}</h1>
	<p>{@html getMessage(status())}</p>

	{#if dev && error() && status() !== 404}
		<pre>{error()?.message}</pre>
	{/if}
</section>

<style>
	pre {
		white-space: pre-wrap;
	}
</style>
