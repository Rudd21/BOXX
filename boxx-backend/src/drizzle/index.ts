import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.js'


if (!process.env.DATABASE_URL) {
  throw new Error('❌ DATABASE_URL не вказано в .env');
}

// Пулинг підключеня
const queryClient = postgres(process.env.DATABASE_URL);

// Сервіс DB, що містить схему
// @ts-ignore
export const db = drizzle(process.env.DATABASE_URL, { schema });