import { Model } from 'sequelize';

interface CommentAttributes {
  body: string;
}

interface CommentCreationAttributes {}

export interface CommentInstance
  extends Model<CommentAttributes, CommentCreationAttributes>,
    CommentAttributes {}
