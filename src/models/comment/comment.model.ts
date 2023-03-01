import { DataTypes } from 'sequelize';
import db from '../../config/database.js';
import { CommentInstance } from './comment.type.js';

const Comment = db.define<CommentInstance>('comment', {
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Comment;
