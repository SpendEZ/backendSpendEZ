import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.resolve(__dirname, '../../.env.development.local') });

export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    logging: false,
  }
);

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected!');
  } catch (err) {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  }
}
