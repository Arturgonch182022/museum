import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/museum',
    resolve: {
        alias: {
            components: 'src/components',
            hooks: 'src/hooks',
            pages: 'src/pages',
            services: 'src/services',
            types: 'src/types',
        }
    }
});
