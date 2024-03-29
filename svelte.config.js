import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false
		},
		alias: {
			$paraglide: './src/paraglide',
			$src: './src',
			$lib: './src/lib',
			$components: './src/components',
			$configs: './src/configs',
			$schema: './src/schema'
		}
	}
};

export default config;
