import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouting from './routing/routing';
import getStore from './store/store';
import './style/_base.scss';

const root = document.getElementById('root');

const store = getStore();

const jsx = (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);

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
