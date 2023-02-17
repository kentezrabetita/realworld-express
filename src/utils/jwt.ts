import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' });

export const generateToken = async (user: Object) => {
  if (user === null) {
    throw new Error('User is required to generate token.');
  }
  const token = jwt.sign({ user }, String(process.env.JWT_SECRET));
  return token;
};
