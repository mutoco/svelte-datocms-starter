import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg'
import svgoOptions from './svgo.config.js';
import strip from "@rollup/plugin-strip";
import graphql from "@rollup/plugin-graphql";

export default ({ mode }: { mode: string }) => {
	return {
		plugins: [
			sveltekit(),
			graphql(),
			svg({
				includePaths: ['src/lib/assets/icons/'],
				svgoOptions,
			}),

			// Strip console.log and assert statements from production builds
			...(mode !== "development" ? [
				strip({
					functions: ['console.log', 'assert.*'],
					include: ['**/*.js', '**/*.svelte']
				})
			] : [])
		],
	}
}
