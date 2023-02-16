import express from 'express';
import {
  loginHandler,
  getAllUsersHandler,
  createUserHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
  deleteMultipleUserHandler
} from '../controllers/user.js';

import { authenticateToken } from '../middleware/token.js';

const router = express.Router();

router.post('/login', loginHandler);
router.post('/', createUserHandler);

router.get('/', authenticateToken, getAllUsersHandler);
router.get('/:id', authenticateToken, getUserByIdHandler);
router.patch('/:id', authenticateToken, updateUserHandler);
router.delete('/:id', authenticateToken, deleteUserHandler);
router.delete('/', authenticateToken, deleteMultipleUserHandler);

export default router;
