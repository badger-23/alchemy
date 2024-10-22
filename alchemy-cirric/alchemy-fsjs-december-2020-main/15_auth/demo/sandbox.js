const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// password
// random string -> ykdqaSPtd9lmiFoSz1aU3O
// ykdqaSPtd9lmiFoSz1aU3Opassword -> hash

// bcrypt.hash('password', '$2a$14$ykdqaSPtd9lmiFoSz1aU3O')
//   .then(console.log);

// const compare = async(password, hash) => {
//   const saltPlusVersion = hash.slice(0, 29);
//   const newHash = await bcrypt.hash(password, saltPlusVersion);

//   return newHash === hash;
// };

const token = jwt.sign({ name: 'spot', age: 5, weight: '20 lbs' }, 'mySecret', {
  expiresIn: '24h'
});
console.log(token);

const good = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3BvdCIsImFnZSI6NSwid2VpZ2h0IjoiMjAgbGJzIiwiaWF0IjoxNjA5OTU4NDM3fQ.jXgiaEq-Gv3vxHghgAdnJ_32_5imhl9x4Nb_8-HnDZ0', 'hello!');
console.log(good);
