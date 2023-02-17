import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null)
    return res.status(401).json('Missing Authorization Header');

  try {
    const decoded = jwt.verify(token, String(process.env.JWT_SECRET));
    next();
  } catch (err) {
    res.status(401).json('Invalid token');
  }
};
