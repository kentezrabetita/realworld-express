import dotenv from 'dotenv';
dotenv.config({ path: '.env.development' });

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: 'postgres'
  }
);

export default sequelize;
