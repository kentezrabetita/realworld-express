"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_js_1 = __importDefault(require("./config/database.js"));
const users_js_1 = __importDefault(require("./routes/users.js"));
dotenv_1.default.config({ path: '.env.development' });
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(process.env.PORT, () => {
    console.log(`running on port ${process.env.PORT}! 🚀`);
});
// TEST ROUTE
app.get('/', (req, res) => {
    res.send('Hello World! 🙋🏻');
});
// ROUTES
app.use('/users', users_js_1.default);
try {
    await database_js_1.default.authenticate();
    console.log('✅ Connection has been established successfully.');
    await database_js_1.default.sync();
    console.log('🧬 Database has been synced successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
//# sourceMappingURL=index.js.map