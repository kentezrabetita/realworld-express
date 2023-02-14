import { Request, Response } from 'express';
import UserService from '../services/user.service.js';

export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserByIdHandler = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUserById(Number(req.params.id));
    if (user === null) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    await UserService.createUser(req.body);
    res.json({ message: 'User Created' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserHandler = async (req: Request, res: Response) => {
  try {
    const updatedUser = await UserService.updateUser(
      Number(req.params.id),
      req.body
    );
    if (updatedUser === null) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json({ message: 'User Updated' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUserHandler = async (req: Request, res: Response) => {
  try {
    const deletedUser = await UserService.deleteUser(Number(req.params.id));
    if (deletedUser === null) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json({ message: 'User Deleted' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMultipleUserHandler = async (
  req: Request,
  res: Response
) => {
  const ids = req.body.list;
  try {
    const deletedUserCount = await UserService.deleteMultipleUser(ids);
    if (deletedUserCount === true) {
      res.json({ message: 'All Users Deleted' });
    } else {
      res.json({ message: 'Multiple Users Deleted' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
