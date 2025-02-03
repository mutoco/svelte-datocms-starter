import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

const scssAliases = (aliases) => {
	return (url) => {
		for (const [alias, aliasPath] of Object.entries(aliases)) {
			if (url.indexOf(alias) === 0) {
				return {
					file: url.replace(alias, aliasPath)
				};
			}
		}
		return url;
	};
};

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [
		vitePreprocess(),
		preprocess({
			scss: {
				includePaths: ['src/lib/scss', resolve('./node_modules')],
				importer: [
					scssAliases({
						$scss: process.cwd() + '/src/lib/scss'
					})
				]
			},
		}),
	],

	kit: {
		adapter: adapter(),
		alias: {
			'$lib': '/src/lib',
			'$components': '/src/lib/components',
			'$stores': '/src/lib/stores',
			'$helpers': '/src/lib/helpers',
			'$graphql': '/src/lib/graphql',
			'$scss': '/src/lib/scss'
		},
	}
};
