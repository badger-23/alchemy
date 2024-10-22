# Redux

## Overview

What is Redux?

Why is it useful?

When should you use it?

## Tools

1. React-Redux
1. Redux DevTools
1. Redux Toolkit

## Terminology

Action
: A regular javascript object that has a required `type` property and an optional `payload`

```js
//the type of action will always be a string the payload can be anything
const action1 = {type: String, payload: {name: 'Vonta', age: 29}};
const action2 = {type: String, payload: [1, 2, 3]};
const action3 = {type: String, payload: 9};
const action4 = {type: String, payload: true};
const action5 = {type: String, payload: 'Nice Day out!'};
```

Action Creator
:

Reducer

Store

Dispatch

Selector

Thunk
