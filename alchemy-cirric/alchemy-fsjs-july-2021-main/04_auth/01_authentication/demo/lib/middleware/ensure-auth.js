import jwt from 'jsonwebtoken';

export default function (req, res, next) {
  const { session } = req.cookies;
  /* session = 
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6InJ1YnlAZG9ncy53b29mIiwiaWF0IjoxNjI4NTQ2MjAxLCJleHAiOjE2Mjg2MzI2MDF9.tGYjucOQvxEJgk_-RIQjxsOm7-04Duj_8pRoYzCtIzQ'
  */
  const payload = jwt.verify(session, process.env.APP_SECRET);
  /* payload = 
      {
        "id": "1",
        "email": "ruby@dogs.woof",
        "iat": 1628546201,
        "exp": 1628632601
      }
  */
  req.user = payload;
  next();
}
