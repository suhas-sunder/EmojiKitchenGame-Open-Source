import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Optional, makes globals like 'describe' and 'it' available without imports
    setupFiles: ['./setupTests.ts'],
    environment: 'jsdom', // Use jsdom for React testing
  },
  define: {
    'process.env': process.env,
    'import.meta.env': {
      MODE: process.env.MODE || 'development', // Set default mode as 'development'
      VITE_PORT: process.env.VITE_PORT || '3200', // Set default port if VITE_PORT is not defined
    },
  },
});
