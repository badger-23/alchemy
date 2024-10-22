DS&A: Functions, Scope, Recursion
===

## Code Challenges, aka "White Boarding"

Time-boxed, live sessions with interviewers who give you a coding challenges that you are expected to attempt to solve. (Distinct from take-home challenges)

Our goals are:

1. Make you a better JavaScript programmer and avoid giving off "red flags"
1. Improve your tech verbalization skills including "talking through" your thought process.
1. Familiarize you with common "code challenges" problem structures
1. Cover the import CS fundamentals behind DS&A and programming

## Process:

1. Relax
1. Ask Questions
1. Draw a picture and/or test cases
1. Identify data structures
1. Write code out loud
1. Step through
1. Evaluate Big O

## Today's Challenges:

person | challenge
---|---
demo | `recursion-sum`
partner 1 | `digits-sum-root`
partner 2 | `repeat-string`
pair | `fibonacci`
demo | `forEach`
partner 1 | `every`
partner 2 | `some`
partner 1 | `map`
partner 2 | `filter`
pair | `say-it`

## Function are Objects

In JavaScript, functions are a special kind of Object.
1. Because they are objects, we can pass them around like objects.
1. Functions are defined (created) with:
    1. Defined parameters - values that could be passed in when the function is called
    1. A "body" - some code that will execute when the function is called
1. Call-site - the place the function is called. pass values as arguments
1. A function can call another function _or itself_ in it's body. 
1. Higher order functions:
    1. Functions can define parameters that are functions
    1. Functions can return functions