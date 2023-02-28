import Tag from './tag.model.js';
import Article from '../article/article.model.js';

export const TagAssociation = (Tag: any, Article: any) => {
  Tag.belongsToMany(Article, { through: 'ArticleTags' });
};
