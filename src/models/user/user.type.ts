import { Model } from 'sequelize';

interface UserAttributes {
  id: number;
  email: string;
  username: string;
  password: string;
  bio: string | null;
  image: string | null;
}

interface UserCreationAttributes {}

export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {}
