export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "import/no-unresolved": 2,
        "import/no-commonjs": 2,
        "import/extensions": [2, "ignorePackages"]
    }
}
