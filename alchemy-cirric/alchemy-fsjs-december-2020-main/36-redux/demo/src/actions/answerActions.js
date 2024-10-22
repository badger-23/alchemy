export const SET_ANSWER = 'SET_ANSWER';
export const setAnswer = (index, answer) => ({
  type: SET_ANSWER,
  payload: { index, answer }
});
