# Promises

A promise (or a thenable) is a way to handle asynchronous actions.

It is a promise to do some action or send some data at some future time.

Other languages may use the word future, delay, or deferred for concepts similar
to JavaScript promises.

## States

* `pending` - initial state of a promise
* `fulfilled` - promise successfully resolved
* `rejected` - promise completed with failure

## Instance methods

* `then` - takes a callback that will get invoked on a fulfilled promise
* `catch` - takes a callback that will get invoked on a rejected promise
* `finally` - takes a callback that will get invoked when a promise finishes

## Promise.all

`Promise.all` takes an array of promises. It returns a promise that fulfills
when each promise in the array fulfills. It rejects if any promise in the array
rejects.

If all promises fulfill, `then` the `onFulfilled` callback is passed an array
where each item is a fulfilled value from the fulfilled promises passed to
`Promise.all` in order.
