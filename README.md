# eslint-plugin-recommend-import

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-recommend-import`:

```
$ npm install eslint-plugin-recommend-import --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-recommend-import` globally.


## How to use

```js
{
  "plugins": [
    "recommend-import"
  ],
  "rules": {
    "recommend-import/no-import-lib": 2
  }
}
```

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

