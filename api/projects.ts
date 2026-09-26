import { connectToDatabase } from './_db';
import { INITIAL_PROJECTS } from './_data';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { db } = await connectToDatabase();
    const projectsCollection = db.collection('projects');
    const projects = await projectsCollection.find({}).toArray();

    if (!projects || projects.length === 0) {
      return res.status(200).json({ projects: INITIAL_PROJECTS, source: 'fallback' });
    }

    return res.status(200).json({ projects, source: 'database' });
  } catch (error) {
    console.error('Error fetching projects from MongoDB:', error);
    return res.status(200).json({ projects: INITIAL_PROJECTS, source: 'fallback' });
  }
}
