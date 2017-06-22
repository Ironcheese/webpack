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
  {{#if_eq lintConfig "standard"}}
  extends: 'standard',
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  extends: 'airbnb-base',
  {{/if_eq}}
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [1,'always'],
    'no-multiple-empty-lines': [1,{'max':4}],
    'no-trailing-spaces': [1,{'skipBlankLines':true}]
  }
}
