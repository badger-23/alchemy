/* eslint-disable no-console */
const ourPromise = ({ timeout = 3000, shouldReject = false }) =>
  new Promise((resolve, reject) => {
    console.log('ourPromise called');

    setTimeout(() => {
      if (shouldReject) reject('Promise rejected!!! OUCH!');
      else resolve('Promise resolved!');
    }, timeout);

    console.log('ourPromise ended');
  });

const logResult = (result) => {
  console.log(result);
  return [result, 'finished'];
};

const logAnotherThing = ([result, finished]) => {
  console.log(result, finished);
  return [result, 'finished with the second .then'];
};

const andAnotherThing = ([result, finishedAgain]) => {
  console.log(result, finishedAgain);
};

// Functional programming approach and similarities using .then
// "hello world"
//   |> uppercase
//   |> remove_spaces
//   |> translate
//   |> save_to_database

ourPromise()
  .then(logResult)
  .then(logAnotherThing)
  .then(andAnotherThing)
  .catch((err) => console.error(err));
