export const getDogs = state => state.dogs;
export const countDogs = state => getDogs(state).length;
