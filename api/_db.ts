import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';
import path from 'path';

try {
  dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
  dotenv.config();
} catch {
  // Dotenv loading is optional in cloud serverless runtimes where process.env is pre-injected
}

// Safely configure DNS servers for local Windows development without breaking Vercel Linux Lambdas
if (process.env.NODE_ENV !== 'production' && process.platform === 'win32') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const dns = require('dns');
    if (dns && typeof dns.setServers === 'function') {
      dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
    }
  } catch {
    // ignore if unsupported
  }
}

interface MongoConnection {
  client: MongoClient;
  db: Db;
}

let cachedConnection: MongoConnection | null = null;

export async function connectToDatabase(): Promise<MongoConnection> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MONGODB_URI environment variable is missing.');
  }

  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const client = new MongoClient(uri, {
      connectTimeoutMS: 5000,
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
    });

    await client.connect();
    const dbName = process.env.DB_NAME || 'portfolio';
    const db = client.db(dbName);

    cachedConnection = { client, db };
    return cachedConnection;
  } catch (error) {
    cachedConnection = null;
    throw error;
  }
}
