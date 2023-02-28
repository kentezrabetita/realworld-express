import Comment from './comment.model.js';
import User from '../user/user.model.js';
import Article from '../article/article.model.js';

export const CommentAssociation = (Comment: any, User: any, Article: any) => {
  Comment.belongsTo(User);
  Comment.belongsTo(Article);
};
