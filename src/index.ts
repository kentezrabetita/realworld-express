import express from 'express';
import cors from 'cors';

import './config/environment.js';

import database from './config/database.js';
import userRoutes from './routes/user.js';

const app = express();
app.use(cors());
app.use(express.json());

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

  app.listen(process.env.PORT, () => {
    console.log(`Server is now running on port ${process.env.PORT}! 🚀`);
  });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
