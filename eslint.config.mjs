import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [

  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,


  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: false,
          tabWidth: 2,
          trailingComma: "es5",
        },
      ],
      "no-console": "warn", // Warn when using console.log
      "semi": ["error", "always"], // Require semicolons
    },
  },
];