import { Sequelize } from 'sequelize';
import database from '../utils/database.js';

const { DataTypes, Model } = Sequelize;

class Tweet extends Model {}

// CREATE TABLE Tweets (
//    id SERIAL PRIMARY KEY,
//    text VARCHAR(240) NOT NULL
//    UserId SERIAL,
//    FOREIGN KEY ("UserId") REFERENCES Users(id)
// )
Tweet.init(
  {
    text: {
      type: DataTypes.STRING(240),
      allowNull: false,
    },
  },
  { sequelize: database }
);

export default Tweet;
