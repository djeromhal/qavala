module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    // "indent" : "off",
    // "quotes" : "off",
    // "semi" : "off",
    // "camelcase" : "off",
    // "prefer-const" : "off",
    // "dot-notation" : "off",
    // "space-before-blocks" : "off",
    // "keyword-spacing" : "off",
    // "no-multiple-empty-lines" : "off",
    // "space-before-function-paren" : "off",
    // "no-trailing-spaces" : "off",
    // "object-curly-spacing" : "off"
  }
}
