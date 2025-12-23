import antfu from "@antfu/eslint-config";

export default antfu({
  type: "app",
  typescript: true,
  formatters: true,
  astro: true,
  react: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  rules: {
    "no-console": ["warn"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
      ignore: ["README.md"],
    }],
  },
});
