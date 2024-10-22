# Node Fundamentals

## Resources

- [Promises - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Agenda

- Event Loop
  - Node fundamentals
    - `libuv`
  - Call Stack
  - History of Callbacks
    - How can you implement multiple dependent API requests?
- Promises
  - States
    - `pending`
    - `fulfilled`
    - `rejected`
  - Static Methods
    - `all`
  - Instance methods
    - `then`
    - `catch`

## Event Loop

- Node Event Loop
  - What is a thread?
    - instruction that the operating system (OS) can
      run
    - Analogy: thread with rings
  - What is a callback?
    - a function that gets invoked in response
      to an event
    - Analogy: restaurant queue
  - Node is single threaded?!?
    - Call Stack
      - invoked functions
    - Callback Queue
      - callbacks waiting to be added to the stack
    - Drawbacks? (cpu intensive operations)
- Callbacks
  - asynchronous callbacks
    - functions that get called after something
      finishes
    - error first

## Promises

A promise (or a thenable) is a way to handle asynchronous actions. It is a
promise to do some action or send some data at some future time.

Other languages may use the word future, delay, or deferred for concepts similar
to JavaScript promises.

### States

- `pending` - initial state of a promise
- `fulfilled` - promise successfully resolved
- `rejected` - promise completed with failure
