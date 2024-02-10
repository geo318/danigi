import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), enhancedImages()],
	resolve: {
		alias: {
			src: path.resolve('src/')
		}
	}
});
