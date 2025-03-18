import eslint from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": "warn", // Warn about unused variables
      "no-console": "off", // Allow console.log for debugging
      "indent": ["error", 2], // Enforce 2-space indentation
      "quotes": ["error", "backtick"], // Enforce backticks for strings
      "comma-dangle": ["error", "always-multiline"], // Ensure cleaner diff history
      "eol-last": ["error", "always"], // Ensure newline at the end of files
      "arrow-parens": ["error", "always"], // Always use parentheses in arrow functions
    },
  },
];
