import { pgTable, uuid, text, numeric, integer, timestamp, pgEnum } from 'drizzle-orm/pg-core';

// 1. ENUMs для БД
export const orderStatusEnum = pgEnum('order_status', [
  'PENDING',
  'PAID',
  'SHIPPED',
  'CANCELLED'
]);

// 2. Таблиця Користувачів (Users)
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  username: text('username').notNull(),
  email: text('email').notNull().unique(),
  phoneNumber: text('phone_number'),
  city: text('city'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 3. Таблиця Категорій (Categories)
export const categories = pgTable('categories', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  icon: text('icon'),
});

// 4. Таблиця Товару (Items)
export const items = pgTable('items', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  views: integer('views').default(0).notNull(),
  city: text('city').notNull(),
  images: text('images').array().notNull(), // Масив посилань на зображення
  categoryId: uuid('category_id').references(() => categories.id).notNull(),
  sellerId: uuid('seller_id').references(() => users.id).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 5. Чати (Chats)
export const chats = pgTable('chats', {
  id: uuid('id').primaryKey().defaultRandom(),
  itemId: uuid('item_id').references(() => items.id).notNull(),
  buyerId: uuid('buyer_id').references(() => users.id).notNull(),
  sellerId: uuid('seller_id').references(() => users.id).notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// 6. Повідомлення в чаті (Chat Messages)
export const chatMessages = pgTable('chat_messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  chatId: uuid('chat_id').references(() => chats.id, { onDelete: 'cascade' }).notNull(),
  senderId: uuid('sender_id').references(() => users.id).notNull(),
  text: text('text').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// 7. Замовлення (Orders)
export const orders = pgTable('orders', {
  id: uuid('id').primaryKey().defaultRandom(),
  itemId: uuid('item_id').references(() => items.id).notNull(),
  buyerId: uuid('buyer_id').references(() => users.id).notNull(),
  sellerId: uuid('seller_id').references(() => users.id).notNull(),
  status: orderStatusEnum('status').default('PENDING').notNull(),
  amount: numeric('amount', { precision: 10, scale: 2 }).notNull(),
  invoiceUrl: text('invoice_url'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});