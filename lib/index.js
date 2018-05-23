/**
 * @fileoverview provide module package.json check when you import module from node_modules
 * @author mrkou47
 */
"use strict";

const requireIndex = require("requireindex");

module.exports.rules = requireIndex(__dirname + "/rules");

module.exports.configs = {
  recommended: {
    rules: {
      'recommend-import/no-import-lib': 2,
    },
  },
};
