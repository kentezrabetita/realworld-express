import { DataTypes } from 'sequelize';
import db from '../../config/database.js';
import Article from '../article/article.model.js';
import Comment from '../comment/comment.model.js';
import { UserAssociation } from './user.association.js';
import { UserInstance } from './user.type.js';

const User = db.define<UserInstance>('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

UserAssociation(Article, User, Comment);

export default User;
