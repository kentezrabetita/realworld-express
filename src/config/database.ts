import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    // ! use process.env.PORT when not using docker compose
    host: process.env.DB_HOST!,
    dialect: 'postgres',
    logging: false
  }
);

export default sequelize;
