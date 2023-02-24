import { DataTypes } from 'sequelize';
import db from '../../config/database.js';

export const UserAssociation = (Article: any, User: any, Comment: any) => {
  const Followers = db.define(
    'UserFollowUser',
    {
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
    },
    {
      tableName: 'UserFollowUser'
    }
  );

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
    through: 'Favoriteszxc',
    foreignKey: 'userId',
    otherKey: 'articleId'
  });

  Followers.belongsTo(User, { foreignKey: 'userId' });
  User.hasMany(Followers, { foreignKey: 'followId' });
};
