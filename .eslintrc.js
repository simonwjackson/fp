module.exports = {
  extends: "eslint-config-simonwjackson",
  parserOptions: {
    sourceType: "module"
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "no-return-assign": ["error", "except-parens"],
    'semi': ["error", "never"],
    "react/jsx-wrap-multilines": false,
    'implicit-arrow-linebreak': ["error", "below"],
    "import/no-unresolved": false,
  }
}