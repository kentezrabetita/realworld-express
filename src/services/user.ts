import User from '../models/user.js';
import { generateToken, hashPassword, comparePassword } from '../utils/jwt.js';

const login = async (username: string, password: string) => {
  const user: any = await User.findOne({ where: { username } });

  if (!user) {
    throw new Error('User does not exist!');
  }

  const isCorrectPassword = await comparePassword(password, user.password);

  if (isCorrectPassword) {
    const token = await generateToken({ username });
    return token;
  } else {
    throw new Error('Error generating JWT token!');
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getUserById = async (id: number) => {
  try {
    const user = await User.findByPk(id);
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const createUser = async (userData: any) => {
  // TODO check if username and email already exist
  try {
    const hashedPassword = await hashPassword(userData.password);
    const updatedUserData = {
      ...userData,
      password: hashedPassword
    };
    return await User.create(updatedUserData);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const updateUser = async (id: number, userData: any) => {
  try {
    const user = await getUserById(id);
    if (user === null) return null;
    else return await User.update(userData, { where: { id } });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const deleteUser = async (id: number) => {
  try {
    const user = await getUserById(id);
    if (user === null) return null;
    else return await User.destroy({ where: { id } });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const deleteMultipleUser = async (ids: number[]) => {
  try {
    if (ids.length === 0) {
      await User.sync({ force: true });
      return true;
    }
    return User.destroy({ where: { id: ids } });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const UserService = {
  login,
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteMultipleUser
};

export default UserService;
