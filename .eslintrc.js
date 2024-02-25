module.exports = {
  root: true,
  extends: ["universe/native"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { varsIgnorePattern: "^_" },
        ],
      },
    },
  ],
};
