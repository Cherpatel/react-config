module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    overrides: [
        {
            env: { node: true },
            files: [
                ".eslintrc.{js,cjs}",
            ],
            parserOptions: { sourceType: "script" },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "import",
        "@typescript-eslint",
        "react",
        "@stylistic/eslint-plugin-js",
        "sort-keys-fix",
        "sort-destructure-keys",
        "react-hooks",
    ],
    rules: {
        "@stylistic/js/padding-line-between-statements": [
            "error",
            {
                blankLine: "always",
                next: "return",
                prev: "*",
            },
            {
                blankLine: "always",
                next: "*",
                prev: ["const", "let", "var"],
            },
            {
                blankLine: "any",
                next: ["const", "let", "var"],
                prev: ["const", "let", "var"],
            },
            {
                blankLine: "always",
                next: "*",
                prev: ["case", "default"],
            },
        ],
        "@typescript-eslint/consistent-type-imports": [
            "error",
            { prefer: "type-imports" },
        ],
        "arrow-body-style": [
            "error",
            "as-needed",
        ],
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        "import/newline-after-import": [
            "error",
            { count: 2 },
        ],
        "import/order": [
            "error",
            {
                alphabetize: { order: "asc" },
                groups: [
                    "external",
                    "builtin",
                    "internal",
                    "sibling",
                    "parent",
                    "index",
                    "type",
                ],
                "newlines-between": "always",
                pathGroups: [
                    {
                        group: "parent",
                        pattern: "@/**/**",
                        position: "before",
                    },
                ],
            },
        ],
        indent: [
            "error",
            4,
        ],
        "key-spacing": [
            "error",
            {
                afterColon: true,
                beforeColon: false,
                mode: "minimum",
            },
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        "no-console": [
            "warn",
            {
                allow:
                ["warn", "error"],
            },
        ],
        "no-duplicate-imports": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                max: 2,
                maxBOF: 0,
                maxEOF: 0,
            },
        ],
        "no-restricted-imports": [
            "error",
            {
                patterns: [
                    {
                        group: ["../"],
                        message: "Relative imports are not allowed.",
                    },
                ],
            },
        ],
        "no-trailing-spaces": "error",
        "object-curly-spacing": [
            "error",
            "always",
        ],
        "quote-props": [
            "error",
            "as-needed",
        ],
        quotes: [
            "error",
            "double",
        ],
        "react/jsx-sort-props": [
            "error",
            {
                callbacksLast: true,
                ignoreCase: true,
                noSortAlphabetically: false,
                reservedFirst: true,
                shorthandFirst: true,
                shorthandLast: false,
            },
        ],
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        semi: [
            "error",
            "always",
        ],
        "sort-destructure-keys/sort-destructure-keys": [
            "error",
            { caseSensitive: false },
        ],
        "sort-keys-fix/sort-keys-fix": [
            "error",
            "asc",
            {
                caseSensitive: true,
                natural: true,
            },
        ],
    },
};
