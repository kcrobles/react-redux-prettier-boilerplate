import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/example';
import './style/_base.scss';

const root = document.getElementById('root');

const jsx = <Example />;

ReactDOM.render(jsx, root);

// {
//     "root": true,
//     "extends": [
//         "standard",
//         "prettier",
//         "prettier/react",
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "plugin:flowtype/recommended"
//     ],
//     "plugins": [
//         "react",
//         "prettier",
//         "flowtype"
//     ],
//     "parser": "babel-eslint",
//     "parserOptions": {
//         "ecmaVersion": 2016,
//         "sourceType": "module",
//         "ecmaFeatures": {
//             "jsx": true
//         }
//     },
//     "env": {
//         "browser": true,
//         "commonjs": true,
//         "node": true,
//         "es6": true,
//         "jest": true,
//         "mocha": true
//     },
//     "settings": {
//         "flowtype": {
//             "onlyFilesWithFlowAnnotation": true
//         }
//     },
//     "rules": {
//         "no-console": 1,
//         "prettier/prettier": [
//             "error",
//             {
//                 "semi": false
//             }
//         ]
//     }
// }
