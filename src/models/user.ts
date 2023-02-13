import { Sequelize, DataTypes } from 'sequelize';
import db from '../config/database.js';

const User = db.define(
  'user',
  {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    freezeTableName: true
  }
);

export default User;
