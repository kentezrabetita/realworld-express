"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMultipleUsers = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const user_js_1 = __importDefault(require("../models/user.js"));
const getAllUsers = async (res) => {
    try {
        const users = await user_js_1.default.findAll();
        res.json(users);
    }
    catch (error) {
        res.json({ message: error.message });
    }
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    try {
        const user = await user_js_1.default.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(user[0]);
    }
    catch (error) {
        res.json({ message: error.message });
    }
};
exports.getUserById = getUserById;
const createUser = async (req, res) => {
    try {
        await user_js_1.default.create(req.body);
        res.json({ message: 'User Created' });
    }
    catch (error) {
        res.json({ message: error.message });
    }
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    try {
        await user_js_1.default.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ message: 'User Updated' });
    }
    catch (error) {
        res.json({ message: error.message });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        await user_js_1.default.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: 'User Deleted'
        });
    }
    catch (error) {
        res.json({ message: error.message });
    }
};
exports.deleteUser = deleteUser;
const deleteMultipleUsers = async (req, res) => {
    const ids = req.body.list;
    if (ids == null) {
        try {
            await user_js_1.default.sync({
                force: true
            });
            res.json({
                message: 'All Users Deleted'
            });
        }
        catch (error) {
            res.json({ message: error.message });
        }
    }
    else {
        try {
            await user_js_1.default.destroy({
                where: {
                    id: ids
                }
            });
            res.json({ message: 'Multiple Users Deleted' });
        }
        catch (error) {
            res.json({ message: error.message });
        }
    }
};
exports.deleteMultipleUsers = deleteMultipleUsers;
//# sourceMappingURL=users.js.map