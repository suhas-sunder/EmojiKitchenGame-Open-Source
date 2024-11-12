// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Optional, makes globals like 'describe' and 'it' available without imports
    setupFiles: ['./setupTests.ts'],
    environment: 'jsdom', // Use jsdom for React testing
  },
});
