import { DataTypes } from 'sequelize';
import db from '../../config/database.js';

const Comment = db.define('comment', {
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Comment;
