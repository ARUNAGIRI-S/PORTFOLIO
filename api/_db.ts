import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';
import path from 'path';
import dns from 'dns';

// Force DNS resolution via Google & Cloudflare DNS to bypass local router/ISP SRV blocks on Windows
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
} catch {
  // Ignore in environment where setServers isn't supported
}

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config();

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
    connectTimeoutMS: 15000,
    serverSelectionTimeoutMS: 15000,
  });

  await client.connect();
  const db = client.db('portfolio');

  cachedConnection = { client, db };
  return cachedConnection;
}
