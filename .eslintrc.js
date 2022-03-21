module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': 0,
        'always': 0,
        'exceptAfterSingleLine': 0,
        // 设置一行的最大长度
        'max-len': [2, 120],
        // 设置文件的最大行数
        'max-lines': [2, 700],
        // 设置function里面允许的代码行数量
        'max-statements': [2, 120],
        // 缩进
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        // 关键字前后空格
        'keyword-spacing': 2,
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-var-requires': 'off'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                mocha: true
            }
        }
    ]
}
