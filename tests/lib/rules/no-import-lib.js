/**
 * @fileoverview this module provide esModule code and you shouldn't import this module from lib
 * @author mrkou47
 */
"use strict";

const rule = require("../../../lib/rules/no-import-lib");
const RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

const ruleTester = new RuleTester();

ruleTester.run("no-import-lib", rule, {
  valid: [
    "import browserHistory from 'react-router';",
    "import { combineReducer } from 'redux';",
  ],

  invalid: [
    {
      code: "import browserHistory from 'react-router/lib/browserHistory'",
      errors: [
        {
          message:
            "react-router provide esModule.You should not import use relative path",
          type: "ImportDeclaration"
        }
      ]
    },
    {
      code: "import combineReducer from 'redux/lib/combineReducer'",
      errors: [
        {
          message:
            "redux provide esModule.You should not import use relative path",
          type: "ImportDeclaration"
        }
      ]
    }
  ]
});
