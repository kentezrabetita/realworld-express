import { DataTypes } from 'sequelize';
import db from '../../config/database.js';

export const UserAssociation = (
  Article: typeof import('../article/article.model').default,
  User: typeof import('./user.model').default,
  Comment: typeof import('../comment/comment.model').default
) => {
  const Followers = db.define('testfollowers', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    followId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    }
  });

  User.hasMany(Article);
  User.hasMany(Comment);

  User.belongsToMany(User, {
    as: 'Followers',
    through: Followers,
    foreignKey: 'followerId',
    otherKey: 'followeeId'
  });

  User.belongsToMany(User, {
    as: 'Following',
    through: Followers,
    foreignKey: 'followeeId',
    otherKey: 'followerId'
  });

  User.belongsToMany(Article, {
    as: 'Favorites',
    through: 'testfavorites',
    foreignKey: 'userId',
    otherKey: 'articleId'
  });

  Followers.belongsTo(User, { foreignKey: 'userId' });
  User.hasMany(Followers, { foreignKey: 'followId' });
};
