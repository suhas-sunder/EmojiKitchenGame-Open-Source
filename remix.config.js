// remix.config.ts
import { defineConfig } from '@remix-run/dev';

export default defineConfig({
  serverBuildTarget: 'node',
  define: {
    'import.meta.env.MODE': JSON.stringify(process.env.NODE_ENV || 'development'),
    'import.meta.env.VITE_PORT': JSON.stringify(process.env.VITE_PORT || '3200'),
  },
});
