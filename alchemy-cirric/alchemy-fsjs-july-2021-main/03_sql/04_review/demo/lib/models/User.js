//// import the datatypes, model, and database connection
//// initialize our user class and extend the sequelize model
//// run user.init with our schema
//// export our user model
import { Sequelize } from 'sequelize';
import database from '../utils/database.js';

const { DataTypes, Model } = Sequelize;

class User extends Model {}

// CREATE TABLE Users (
//   id SERIAL PRIMARY KEY,
//   name TEXT NOT NULL UNIQUE,
//   bio TEXT
// )
User.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },

    bio: {
      type: DataTypes.TEXT,
    },
  },
  { sequelize: database, timestamps: false }
);

export default User;
