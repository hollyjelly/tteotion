import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
  tailwind.configs.recommended,
  {
    plugins: {
      tailwindcss: tailwind,
    },
    settings: {
      tailwindcss: {
        cssConfigPath: "./src/app/globals.css",
      },
    },
    rules: {
      // Only Tailwind's default scale for sizing/gap/padding/radius — colors/typography are exempt.
      "tailwindcss/no-arbitrary-value": "error",
      // Only colors defined in globals.css's @theme — Tailwind's built-in palette is wiped there.
      "tailwindcss/no-custom-classname": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
