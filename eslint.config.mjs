import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "react/jsx-uses-react": "off", // React 17+ doesn't require React import
      "react/react-in-jsx-scope": "off", // React 17+ doesn't require React in scope
      "react/prop-types": "off", // PropTypes are unnecessary with TypeScript
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      "no-debugger": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "2020",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ["**/__tests__/**/*.{js,ts,tsx}", "**/*.{spec,test}.{js,ts,tsx}"],
    rules: {
      "no-console": "off", // Allow console logs in test files
    },
  },
];
