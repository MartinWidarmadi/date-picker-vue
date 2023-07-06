import { defineConfig, configDefaults } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    exclude: [...configDefaults.exclude, 'packages/template/*'],
  },
});
