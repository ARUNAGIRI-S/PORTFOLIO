import { connectToDatabase } from './_db';
import { INITIAL_CERTIFICATES } from './_data';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { db } = await connectToDatabase();
    const certCollection = db.collection('certificates');
    const certificates = await certCollection.find({}).toArray();

    if (!certificates || certificates.length === 0) {
      return res.status(200).json({ certificates: INITIAL_CERTIFICATES, source: 'fallback' });
    }

    return res.status(200).json({ certificates, source: 'database' });
  } catch (error) {
    console.error('Error fetching certificates from MongoDB:', error);
    return res.status(200).json({ certificates: INITIAL_CERTIFICATES, source: 'fallback' });
  }
}
