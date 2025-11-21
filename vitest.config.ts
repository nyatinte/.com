import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import react from "@vitejs/plugin-react";
import { playwright } from "@vitest/browser-playwright";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],
  optimizeDeps: {
    /**
     * Vitest 4.x で Storybook のテストが初回実行時に失敗する問題の対策
     * @see {@link https://github.com/vitest-dev/vitest/issues/8471}
     */
    include: [
      "@storybook/addon-a11y/preview",
      "@storybook/nextjs-vite",
      "storybook/theming",
    ],
  },
  test: {
    projects: [
      // Unit tests project
      {
        test: {
          name: "unit",
          include: ["**/__tests__/**/*.test.ts", "**/*.test.ts"],
          exclude: ["**/*.stories.tsx", "app/**/*.test.tsx", "node_modules/**"],
          environment: "node",
        },
      },
      // Browser tests project
      {
        test: {
          name: "browser",
          include: ["app/**/*.test.tsx"],
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
      // Storybook tests project
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
