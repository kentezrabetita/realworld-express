"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_js_1 = require("../controllers/users.js");
const router = express_1.default.Router();
router.get('/', users_js_1.getAllUsers);
router.get('/:id', users_js_1.getUserById);
router.post('/', users_js_1.createUser);
router.patch('/:id', users_js_1.updateUser);
router.delete('/:id', users_js_1.deleteUser);
router.delete('/', users_js_1.deleteMultipleUsers);
exports.default = router;
//# sourceMappingURL=users.js.map