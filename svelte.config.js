import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import { executeQueryWithAutoPagination } from '@datocms/cda-client';
import { generatePaths, query } from './src/lib/helpers/generatePaths.js';
import 'dotenv/config';

const getPaths = async () => {
	try {
		return generatePaths(
			await executeQueryWithAutoPagination(query, {
				token: process.env.PUBLIC_GRAPHQL_API_TOKEN,
			})
		);
	} catch (error) {
		console.error(error);
	}
};

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
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: await getPaths()
		},
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
