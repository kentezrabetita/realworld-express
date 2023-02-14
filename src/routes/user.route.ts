import express from 'express';
import {
  getAllUsersHandler,
  createUserHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
  deleteMultipleUserHandler
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAllUsersHandler);
router.get('/:id', getUserByIdHandler);
router.post('/', createUserHandler);
router.patch('/:id', updateUserHandler);
router.delete('/:id', deleteUserHandler);
router.delete('/', deleteMultipleUserHandler);

export default router;
