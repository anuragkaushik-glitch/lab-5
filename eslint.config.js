import js from "@eslint/js";

export default [
  // Base recommended rules
  js.configs.recommended,

  // Your project rules
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "dist/**", "build/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
        process: "readonly",
      },
    },

    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      eqeqeq: ["error", "always"],
      "prefer-const": "error",
      "no-console": "off",
    },
  },
];