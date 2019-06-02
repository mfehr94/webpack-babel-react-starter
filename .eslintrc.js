module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    settings: {
        react: {
            version: '16.0',
        },
    },
    globals: {
        process: true,
        __DEV__: true,
        __ENV__: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'babel',
        'import',
        'react',
    ],
    rules: {
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
            },
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'max-len': [
            'error',
            120,
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'never',
            },
        ],
        'key-spacing': 'error',
        'no-alert': 'error',
        'padded-blocks': [
            'error',
            'never',
        ],
        'arrow-parens': [
            'error',
            'always',
        ],
        'eol-last': [
            'error',
            'always',
        ],
        'no-multiple-empty-lines': [
            'error',
            { 'max': 1 },
        ],
        'no-trailing-spaces': 'error',
        'curly': 'error',
        'no-case-declarations': 'off',
        'no-multi-spaces': 'error',
        'prefer-const': 'error',
        'space-infix-ops': 'error',
        'yoda': [
            'error',
            'always',
        ],
        'import/order': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/export': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-nodejs-modules': 'error',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-absolute-path': 'error',
        'import/named': 'error',
        'import/default': 'error',
        'react/no-deprecated': 'warn',
        'react/jsx-curly-spacing': [
            'error',
            'never',
        ],
        'react/jsx-closing-bracket-location': [
            'error',
            'line-aligned',
        ],
        'react/jsx-max-props-per-line': [
            'error',
            {
                'maximum': 1,
                'when': 'multiline',
            },
        ],
        'react/jsx-wrap-multilines': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-tag-spacing': [
            'error',
            {
                'beforeClosing': 'never',
            },
        ],
        'react/jsx-key': 'error',
        'react/jsx-indent': 'error',
        'react/jsx-indent-props': 'error',
        'react/jsx-equals-spacing': 'error',
        'react/jsx-handler-names': 'error',
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline-multiprop',
        ],
        'react/prop-types': 'off',
        'babel/semi': 'error',
    },
};
