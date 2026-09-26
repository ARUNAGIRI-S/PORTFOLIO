import { connectToDatabase } from '../api/_db';
import { INITIAL_PROJECTS, INITIAL_EXPERIENCES, INITIAL_CERTIFICATES } from '../api/_data';

async function seed() {
  console.log('🚀 Starting safe portfolio database seeding...');

  try {
    const { db } = await connectToDatabase();
    const now = new Date().toISOString();

    // 1. Seed Projects
    const projectsCol = db.collection('projects');
    await projectsCol.createIndex({ slug: 1 }, { unique: true });
    await projectsCol.createIndex({ featured: -1 });

    let projectsInserted = 0;
    for (const project of INITIAL_PROJECTS) {
      const existing = await projectsCol.findOne({ slug: project.slug });
      if (!existing) {
        await projectsCol.insertOne({
          ...project,
          createdAt: now,
          updatedAt: now,
        });
        projectsInserted++;
      }
    }
    console.log(`✅ Projects collection seeded (${projectsInserted} new items inserted, total checked: ${INITIAL_PROJECTS.length}).`);

    // 2. Seed Experience
    const expCol = db.collection('experience');
    await expCol.createIndex({ role: 1, organization: 1 });

    let expInserted = 0;
    for (const exp of INITIAL_EXPERIENCES) {
      const existing = await expCol.findOne({ role: exp.role, organization: exp.organization });
      if (!existing) {
        await expCol.insertOne({
          ...exp,
          createdAt: now,
          updatedAt: now,
        });
        expInserted++;
      }
    }
    console.log(`✅ Experience collection seeded (${expInserted} new items inserted, total checked: ${INITIAL_EXPERIENCES.length}).`);

    // 3. Seed Certificates
    const certCol = db.collection('certificates');
    await certCol.createIndex({ title: 1, issuer: 1 });

    let certInserted = 0;
    for (const cert of INITIAL_CERTIFICATES) {
      const existing = await certCol.findOne({ title: cert.title, issuer: cert.issuer });
      if (!existing) {
        await certCol.insertOne({
          ...cert,
          createdAt: now,
          updatedAt: now,
        });
        certInserted++;
      }
    }
    console.log(`✅ Certificates collection seeded (${certInserted} new items inserted, total checked: ${INITIAL_CERTIFICATES.length}).`);

    // 4. Create Messages Index
    const messagesCol = db.collection('messages');
    await messagesCol.createIndex({ createdAt: -1 });
    console.log('✅ Messages collection index verified.');

    console.log('🎉 Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed with error:', error);
    process.exit(1);
  }
}

seed();
