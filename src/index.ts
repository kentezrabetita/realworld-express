import express from 'express';
import cors from 'cors';
import chalk from 'chalk';

import './config/environment.js';

import database from './config/database.js';
import userRoutes from './routes/user.js';
import articleRoutes from './routes/article.js';

const app = express();
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('Hello World! 🙋🏻');
});

// ROUTES
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

try {
  await database.authenticate();
  console.log(
    chalk.bgGreen.bold(' [SUCCESS] ') +
      ' Connection has been established successfully. ✅'
  );
  await database.sync();
  console.log(
    chalk.bgGreen.bold(' [SUCCESS] ') +
      ' Database has been synced successfully. 🧬'
  );

  app.listen(process.env.PORT, () => {
    console.log(
      chalk.bgMagenta.bold(' [RUNNING] ') +
        ` Server is now running on port ${process.env.PORT}! 🚀`
    );
  });
} catch (error) {
  console.error(
    chalk.bgRed.bold(' [ERROR] ') + ' Unable to connect to the database:',
    error
  );
}
