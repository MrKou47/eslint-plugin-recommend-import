# no-import-lib

For ensure code-shinking is enable. You should not import module from lib.

## Rule Details

This rule aims to ensure that the current `import` module which provides `module` field in the `package.json`  


Examples of **incorrect** code for this rule:

```js
import browserHistory from 'react-router/lib/browserHistory';
import combineReducer from 'redux/lib/combineReducer';
```

Examples of **correct** code for this rule:

```js
import { browserHistory } from 'react-router';
import { combineReducer } from 'redux/lib/combineReducer';
```

