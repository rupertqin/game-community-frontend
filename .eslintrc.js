// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // extends: 'standard',
  extends: 'eslint-config-egg',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 2,
    // allow async-await
    'generator-star-spacing': 0,
    'semi': [0, "always"],
    'comma-dangle': ["warn", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "never",
      "exports": "never",
      "functions": "ignore"
    }],
    'strict': 2,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
