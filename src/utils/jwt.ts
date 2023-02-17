import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const DEFAULT_SALT_ROUNDS = 10;
const TOKEN_EXPIRATION = '8h';

export const generateToken = async (user: Object) => {
  if (user === null) {
    throw new Error('User is required to generate token.');
  }
  const token = await jwt.sign(user, String(process.env.JWT_SECRET), {
    expiresIn: TOKEN_EXPIRATION
  });
  return token;
};

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, DEFAULT_SALT_ROUNDS);
  return hashedPassword;
};
