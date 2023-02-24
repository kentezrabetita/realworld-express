import Article from '../article/article.model.js';
import User from './user.model.js';
import Comment from '../comment/comment.model.js';

User.hasMany(Article);
User.hasMany(Comment);

User.belongsToMany(User, {
  as: 'Followers',
  through: 'Followers',
  foreignKey: 'followerId',
  otherKey: 'followeeId'
});

User.belongsToMany(User, {
  as: 'Following',
  through: 'Followers',
  foreignKey: 'followeeId',
  otherKey: 'followerId'
});

User.belongsToMany(Article, {
  as: 'Favorites',
  through: 'Favorites',
  foreignKey: 'userId',
  otherKey: 'articleId'
});
