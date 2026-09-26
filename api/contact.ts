import { connectToDatabase } from './_db';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        // fallback
      }
    }
    body = body || {};

    const { name, email, subject, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({ error: 'Name is required' });
    }
    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return res.status(400).json({ error: 'Valid email address is required' });
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ error: 'Message content is required' });
    }

    const { db } = await connectToDatabase();
    const messagesCollection = db.collection('messages');

    const newMessage = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: (subject || 'Portfolio Inquiry').trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    const result = await messagesCollection.insertOne(newMessage);

    return res.status(201).json({
      success: true,
      message: 'TRANSMISSION_SENT // Message received and recorded in database.',
      id: result.insertedId,
    });
  } catch (error: any) {
    console.error('Error storing contact message in MongoDB:', error);
    return res.status(500).json({ error: 'Failed to process contact message' });
  }
}
