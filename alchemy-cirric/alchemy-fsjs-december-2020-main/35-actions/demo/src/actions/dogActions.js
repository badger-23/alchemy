export const CREATE_DOG = 'CREATE_DOG';
export const createDog = dog => ({
  type: CREATE_DOG,
  payload: dog
});

export const DELETE_DOG = 'DELETE_DOG';
export const deleteDog = (name) => ({
  type: DELETE_DOG,
  payload: name
});
