// eslint-disable-next-line no-unused-vars
module.exports = (one, two, three, four) => {
  const status = one.status || 500;

  three.status(status);

  console.log(one);

  three.send({
    status,
    message: one.message,
  });
};
