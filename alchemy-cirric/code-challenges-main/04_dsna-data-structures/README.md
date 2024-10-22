DS&A: Data Structures
===

## Today's Challenges:

person | challenge
---|---
partner 1 | `Stack`
partner 2 | `Queue`
pair | `O-1-queue`
demo | `reverse-array-with-stack`
pair | `check-syntax`
pair | `linked-list`

## Abstract Data Structures

Abstract Data type (ADT) is a type (or class) for objects whose behaviour is defined by a set of value and a set of operations.

The definition of ADT only mentions what operations are to be performed but not how these operations will be implemented. It does not specify how data will be organized in memory and what algorithms will be used for implementing the operations. It is called “abstract” because it gives an implementation-independent view. The process of providing only the essentials and hiding the details is known as abstraction.

## JavaScript Classes

```js

class MyDataStructure {
    constructor() {     // invoked via: new MyDataStructure()
        this.list = [];
    }

    method1() {
        // access state, ie this.list
    }

    method2() {
        // access state, ie this.list
    }

    get property1() {
        // access state, ie this.list
    }

    set property1() {
        // access state, ie this.list
    }
}

```