module.exports = {
    extends: ["@commitlint/config-angular"],
    rules: {
        "header-max-length": [2, "always", 100],
        "header-min-length": [2, "always", 12],
        "type-enum": [
            2,
            "always",
            [
                "build",
                "chore",
                "ci",
                "docs",
                "feat",
                "fix",
                "perf",
                "refactor",
                "revert",
                "style",
                "test",
            ],
        ],
        "scope-empty": [2, "never"],
        "scope-enum": [
            2,
            "always",
            [
                "ci",
                "desktop",
                "deployment",
                "electron",
                "env",
                "agora",
                "whiteboard",
                "component",
                "flat-components",
                "flat-types",
                "web",
                "i18n",
                "renderer-app",
                "main-app",
                "version",
                "library",
                "scripts",
                "readme",
                "eslint",
                "prettier",
                "husky",
                "lint",
                "project",
                "ide",
                "license",
                "debug",
                "github",
            ],
        ],
        "scope-case": [2, "always", ["lower-case", "kebab-case"]],
    },
};
