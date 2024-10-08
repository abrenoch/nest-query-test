import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

const CONFIG = dotenv.config().parsed;

const AppDataSource = new DataSource({
  type: CONFIG.DB_TYPE as any,
  host: CONFIG.DB_HOST,
  port: parseInt(CONFIG.DB_PORT),
  username: CONFIG.DB_USERNAME,
  password: CONFIG.DB_PASSWORD,
  database: CONFIG.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [process.cwd() + '/src/*.entity.ts'],
  migrations: [process.cwd() + '/migrations/*.ts'],
  subscribers: [],
});

export default AppDataSource;
