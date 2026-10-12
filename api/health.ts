export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const diag: any = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'portfolio-api',
    nodeVersion: process.version,
    platform: process.platform,
    envHasMongoUri: !!process.env.MONGODB_URI,
    envDbName: process.env.DB_NAME || 'portfolio (default)',
  };

  try {
    const dbModule = await import('./_db.ts');
    diag.dbImport = 'SUCCESS (_db.ts)';
    try {
      const conn = await dbModule.connectToDatabase();
      diag.dbConnection = 'CONNECTED';
    } catch (dbErr: any) {
      diag.dbConnection = `FAILED: ${dbErr?.name || 'Error'} - ${dbErr?.message || 'unknown'}`;
    }
  } catch (errTs: any) {
    diag.dbImportTsError = errTs?.message || String(errTs);
    try {
      const dbModule = await import('./_db.js');
      diag.dbImport = 'SUCCESS (_db.js)';
    } catch (errJs: any) {
      diag.dbImportJsError = errJs?.message || String(errJs);
      try {
        const dbModule = await import('./_db');
        diag.dbImport = 'SUCCESS (_db)';
      } catch (errNone: any) {
        diag.dbImportNoneError = errNone?.message || String(errNone);
      }
    }
  }

  return res.status(200).json(diag);
}
