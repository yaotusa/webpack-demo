module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jquery": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
                                               // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "16.0", // React version, default to the latest React stable release
            "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                       // propTypes object, e.g. `forbidExtraProps`.
                                                       // If this isn't set, any propTypes wrapped in
                                                       // a function will be skipped.
    },
    "parser": 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 6,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/prop-types": [
            "off"
        ],
        "react/display-name": [
            "off"
        ]
    }
};