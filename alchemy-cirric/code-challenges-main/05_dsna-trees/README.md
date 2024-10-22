DS&A: Data Structures: Trees
===

## Today's Challenges:

person | challenge
---|---
pair | `tree-nodes`
partner 1 | `binary-node-add`
partner 2 | `binary-node-find`
pair | `calc-heights`

## Trees

Trees are a network of node-based data structures (like we saw with linked lists) that have an associated value and a list of children.

Examples:
- Folders and Files
- DOM nodes

**The fundamental restriction on a tree is that children cannot contain their parents**

## Traversal

Traversal is visiting each node in a tree in a [specified order](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/). Typically:

1. Breadth First (levels)
1. Depth First (down branches)
    1. In order
    1. Pre order
    1. Post order

## Challenge Time!

`tree-nodes` (work together on this)

## Binary Trees

Binary tree nodes have exactly two children, named `left` and `right`. The associated data values between a parent and its children is such that:

1. `left` < `parent`
1. `parent` < `right`

Binary trees unlock the magic of `logN` (opposite of exponent) allowing double the work to be done with each increase in input size!

## Challenge Time!

`binary-node-add`

`binary-node-find`

## Tree Height

Effectiveness of logN is dependent on a balanced tree, otherwise regresses to linear.

## Challenge Time!

`calc-min-max-height`

