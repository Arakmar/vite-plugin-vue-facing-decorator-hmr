const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
    ],
    plugins: ['import', 'regexp'],
    parser: '@typescript-eslint/parser'
})
