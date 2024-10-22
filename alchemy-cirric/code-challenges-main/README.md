Code Challenges, aka "White Boarding"
===

Time-boxed, live sessions with interviewers who give you a coding challenges that you are expected to attempt to solve. (Distinct from take-home challenges)

Our goals are:

1. Make you a better JavaScript programmer and avoid giving off "red flags"
1. Improve your tech verbalization skills including "talking through" your thought process.
1. Familiarize you with common "code challenges" problem structures
1. Cover the import CS fundamentals behind DS&A and programming

We will _not_ go into sorting algorithms, advanced data structures like graphs, or math set theory problems. If you are interviewing at a company that does this level of code challenge, you will need to prep with something like 

> Cracking the Coding Interview: 189 Programming Questions and Solutions _by Gayle Laakmann McDowel_

## Process:

We have a [set process](how-to-whiteboard.pdf) to use:

1. Relax
1. Ask Questions
1. Draw a picture and/or test cases
1. Identify data structures
1. Write code out loud
1. Step through
1. Evaluate Big O

Also consider this [example rubric](example-whiteboard-rubric.md)

## Not Getting Stuck Tips

Claim every inch you can:

* Write the function declaration
* Declare the variable
* Write the control flow keyword

## Indentation & Code Formatting

Good indentation and brackets are critical _and meaningful_, If you write sloppy code with bad indentation and code brackets (`{` and `}`) you are dooming yourself:
* Seeing control flow (reasoning about code)
* Managing variable scope

If a candidate cannot manage indentation and whitespace, they **will** be passed over. **You preparing to work in the professionally industry**

1. Don't ever write code in the margins
    ```js
    if(condition) {
    let x = 2 // why is this code in the indentation margin?!?
    
    }
    ```
1. Complete and format brackets before writing any code
    ```js
    for(let i = 0; i < arr.length; i++) {
        if(condition)
      }
    ```

## Actual In-Person White Boarding

Practice, practice, practice your pen-person-ship:
1. Horizontally even
1. Consistent letter size
1. Letter size is practical
1. Leave room on right for test cases and diagrams

Additional tips:
1. Don't close brackets ahead of time (until you know how much code to write)
1. Write "double-spaced" so you can squeeze in a line if you need it
1. Don't be afraid to erase a line and rewrite