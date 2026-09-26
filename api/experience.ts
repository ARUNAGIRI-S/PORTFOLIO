import { connectToDatabase } from './_db';
import { INITIAL_EXPERIENCES } from './_data';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { db } = await connectToDatabase();
    const expCollection = db.collection('experience');
    const experience = await expCollection.find({}).toArray();

    if (!experience || experience.length === 0) {
      return res.status(200).json({ experience: INITIAL_EXPERIENCES, source: 'fallback' });
    }

    return res.status(200).json({ experience, source: 'database' });
  } catch (error) {
    console.error('Error fetching experience from MongoDB:', error);
    return res.status(200).json({ experience: INITIAL_EXPERIENCES, source: 'fallback' });
  }
}
