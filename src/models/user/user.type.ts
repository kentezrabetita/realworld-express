import { Model, Optional } from 'sequelize';
import { CommentInstance } from '../comment/comment.type';

interface UserAttributes {
  id: number;
  email: string;
  username: string;
  password: string;
  bio: string | null;
  image: string | null;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserModel
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  comments?: CommentInstance[];
}

export interface UserInstance extends UserModel {}
