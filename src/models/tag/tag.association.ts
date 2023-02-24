import Tag from './tag.model.js';
import Article from '../article/article.model.js';

Tag.belongsToMany(Article, { through: 'ArticleTags' });
