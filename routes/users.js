import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  deleteMultipleUsers
} from '../controllers/users';
import express from 'express';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.delete('/', deleteMultipleUsers);

export default router;
