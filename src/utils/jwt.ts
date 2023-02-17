import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config({ path: '.env.development' });

const DEFAULT_SALT_ROUNDS = 10;

export const generateToken = async (user: Object) => {
  if (user === null) {
    throw new Error('User is required to generate token.');
  }
  const token = await jwt.sign(user, String(process.env.JWT_SECRET));
  return token;
};

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, DEFAULT_SALT_ROUNDS);
  return hashedPassword;
};
