import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
	base: '/CODELOG---Coding-Tracker/',
	build: {
		rollupOptions: {
			input: 'index.source.html',
		},
	},
	plugins: [react()],
});
