import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import database from './config/database.js';

import userRoutes from './routes/user.route.js';

dotenv.config({ path: '.env.development' });

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}! 🚀`);
});

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('Hello World! 🙋🏻');
});

// ROUTES
app.use('/users', userRoutes);

try {
  await database.authenticate();
  console.log('✅ Connection has been established successfully.');
  await database.sync();
  console.log('🧬 Database has been synced successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
