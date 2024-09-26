import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		port: 3221,
		fs: {
			allow: [
			  // search up for workspace root
			  // searchForWorkspaceRoot(process.cwd()),
			  // your custom rules
			  '..'
			],
		},
	}
});
