/**
 * @fileoverview this module provide esModule code and you shouldn't import this module from lib
 * @author mrkou47
 */
"use strict";

const fs = require("fs");
const path = require("path");

module.exports = {
  meta: {
    docs: {
      description:
        "this module provide esModule code and you shouldn't import this module from lib",
      category: "Best Practices",
      recommended: false
    },
    fixable: null,
    schema: []
  },

  create: function(context) {
    const noop = () => {};
    const cwd = process.cwd();
    function readCurrentPkgJson(moduleName) {
      const pkgJsonPath = path.join(cwd, 'node_modules', moduleName, 'package.json');
      try {
        const packageJson = require(pkgJsonPath);
        return packageJson;
      } catch (error) {
        return '';
      }
    }
    return {
      // detect whether the module's package.json has module prop or not
      ImportDeclaration: function(node) {
        /**
         * imported file might be:
         * ./a.js
         * ./a
         * ./lib/a
         * react-router
         * react-router/lib/browserHistory(.js)
         * react-router/lib/browserHistory(/index.js)
         */
        const value = node.source.value;
        const moduleName = value.indexOf('/') > -1 ? value.split('/')[0] : value;
        try {
          const pkgObj = readCurrentPkgJson(moduleName);
          if (!pkgObj) return;
          if (pkgObj && 'module' in pkgObj && value.indexOf('/') > -1) {
            context.report(node, `${moduleName} provide esModule.You should not import use relative path`);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
  }
};
