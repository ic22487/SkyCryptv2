import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
			// Allow serving files from static/resourcepacks
			allow: ['..']
		}
	},
	optimizeDeps: {
		exclude: ['fs', '@napi-rs/canvas']
	}
});