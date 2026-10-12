import { connectToDatabase } from './_db.js';

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
    const isConnError = error?.name === 'MongoServerSelectionError' || 
                        error?.name === 'MongoNetworkError' ||
                        error?.message?.includes('MONGODB_URI') ||
                        error?.message?.includes('timed out');
    
    // Server-side diagnostic log without logging sensitive connection strings
    console.error(`Contact API database error [${error?.name || 'Error'}]:`, error?.message || 'Unknown error');
    
    if (isConnError) {
      return res.status(503).json({ 
        success: false,
        error: 'DATABASE_UNAVAILABLE // Database connection is temporarily unavailable. Please try again later or reach out via direct email.' 
      });
    }

    return res.status(500).json({ 
      success: false,
      error: 'TRANSMISSION_FAILED // Failed to process contact message. Please try again.' 
    });
  }
}
