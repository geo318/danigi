import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/paraglide'
		}),
		enhancedImages()
	],
	resolve: {
		alias: {
			src: path.resolve('src/')
		}
	}
});
