import { Model } from 'sequelize';
import { UserInstance } from '../user/user.type';

interface CommentAttributes {
  body: string;
}

interface CommentCreationAttributes {}

interface CommentModel
  extends Model<CommentAttributes, CommentCreationAttributes>,
    CommentAttributes {
  user?: UserInstance;
}

export interface CommentInstance extends CommentModel {}
