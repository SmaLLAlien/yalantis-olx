module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "extends": ["airbnb", "prettier"],
    "env": {
        "browser": true,
        "jest": true
    },
    "rules": {
        "max-len": ["error", {"code": 100}],
        "prefer-promise-reject-errors": ["off"],
        "react/jsx-filename-extension": ["off"],
        "react/prop-types": ["warn"],
        "no-return-assign": ["off"],
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
    }
}
