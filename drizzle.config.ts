import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';


export default defineConfig({
  out: './drizzle',
  schema: './db/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL || '', // Default to an empty string
    authToken: process.env.TURSO_AUTH_TOKEN || '', // Default to an empty string
  },
});
