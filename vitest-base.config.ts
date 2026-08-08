// Learn more about Vitest configuration options at https://vitest.dev/config/

import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    browser: {
      provider: playwright(),
      enabled: true,
      instances: [{ browser: 'chromium' }],
    },
  },
});
