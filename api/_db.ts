import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config();

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

  const client = new MongoClient(uri, {
    connectTimeoutMS: 10000,
    serverSelectionTimeoutMS: 10000,
  });

  await client.connect();
  const db = client.db('portfolio');

  cachedConnection = { client, db };
  return cachedConnection;
}
