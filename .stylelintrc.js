module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order', 'stylelint-scss'],
  rules: {
    // lowerCamelCase
    'selector-class-pattern': null,
    // Например, задает чтобы все настраиваемые свойства начинались с my-
    //  'custom-property-pattern': '(?<=my-)',
    // null отключает проверку на это правило
    'declaration-colon-newline-after': null,
    'string-quotes': null,
    'scss/dollar-variable-pattern': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/at-mixin-pattern': null,
    'shorthand-property-no-redundant-values': null,
    'length-zero-no-unit': null,
    'property-no-vendor-prefix': null,
    'at-rule-empty-line-before': 'never',
    'scss/at-rule-conditional-no-parentheses': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/operator-no-unspaced': null,
    'keyframes-name-pattern': null,
  },
}
