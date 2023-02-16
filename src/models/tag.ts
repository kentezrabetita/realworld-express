import { DataTypes } from 'sequelize';
import db from '../config/database.js';

const Tag = db.define(
  'Tag',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  },
  { timestamps: false }
);
export default Tag;
