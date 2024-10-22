import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function play() {
  const password = 'super secret password';
  const hashedPassword = await bcrypt.hashSync(password, 10);

  console.log('hashedPassword', hashedPassword);

  const token = jwt.sign(
    { name: 'ruby', age: 10, weight: '11 lbs' },
    'our secret key',
    {
      expiresIn: '24h',
    }
  );

  console.log('token', token);

  const payload = jwt.verify(token, 'our secret key');

  console.log('payload', payload);
}

play();
