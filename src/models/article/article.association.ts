import Article from './article.model.js';
import User from '../user/user.model.js';
import Tag from '../tag/tag.model.js';

Article.belongsTo(User);
Article.belongsToMany(Tag, { through: 'ArticleTags' });

Article.belongsToMany(User, {
  as: 'FavoriteArticle',
  through: 'FavoriteArticles',
  foreignKey: 'articleId',
  otherKey: 'userId'
});
