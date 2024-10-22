Simple Database
===

This is a lab assignment for creating a very rudimentary database that can save and retrieve objects from the file system, written in JavaScript using Node. It uses a `SimpleDb` class that has methods to create, read one, read all, delete, and update files.

## Testing

The `SimpleDb` class should be developed using TDD and all requirements are expected to be tested.

Because the `SimpleDb` creates `.json` files, we need to tell jest to ignore our test directory for storing files. Assuming you are using a `store` folder, you would add the following to your `package.json` `"jest"` node:

```json
"jest": {
    "testEnvironment": "node",
    "watchPathIgnorePatterns": [
      "store"
    ]
  },
```

The logical progression of tests/features:
1. `beforeEach` setup that ensures a clean working directory
1.  ✓ saved object has id
1.  ✓ save and get an object (one test that saves and then gets)
1.  ✓ returns null for non-existent id
1.  ✓ gets all objects
1.  ✓ deletes an object
1.  ✓ updates an object

## SimpleDb API

The `SimpleDb` should have the following methods:

### `constructor(rootDir)` 

Allows creation via `new SimpleDb(rootDir)`. The `rootDir` is will be the folder in which files will be saved.

### `.save(<objectToSave>)` 

1. Assigns a unique `id` property to the object (this will mutate the incoming object)
2. Serializes, the object using `JSON.stringify` and saves to a JSON file named with the id and having a `.json` file extension

### `.get(<id>)` 

1. Reads the contents of the JSON file with the corresponding ID
2. Deserializes to an object using `JSON.parse`

**If the id (file) does not exist, should return `null`** Use `.catch` to check for file not found (ENOENT). Make sure to rethrow any other error.

### `.getAll()`

Returns an array of all the objects in the directory, deserialized from the corresponding files in the directory.

**The work to retrieve the files should be done __in parallel__ (`Promise.all`)**
    
### STRETCH `.remove(<id>)` 

Remove the JSON file with the corresponding ID.

### STRETCH `.update(<objectToUpdate>)`

Update the JSON file with the corresponding ID with the serialized contents of the new supplied object.

REFACTOR: Consider if `save` and `update` can use a common method

### STRETCH REFACTOR: getObjectPath

Many of the class methods have the same logic for constructing the file path of an object. Can you move this work to a new method on `SimpleDb` that each of the other methods calls to make the file path?

## Grading Rubric

Item | Points
--- | ---
Test setup with clean working directory | 1
Tested `save` and `get(id)` methods | 4
Tested `get(id)` returns null (using `.catch`) | 1
Tested `getAll()` with parallel work using promise.all | 4
STRETCH: tested `remove(id)` | +1
STRETCH: testing `update(object)` | +1
STRETCH: REFACTOR object path | +1
