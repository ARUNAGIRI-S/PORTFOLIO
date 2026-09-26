import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';
import path from 'path';

function apiDevPlugin(): Plugin {
  return {
    name: 'api-dev-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url.startsWith('/api/')) {
          const urlPath = req.url.split('?')[0];
          const routeName = urlPath.replace('/api/', '');
          const handlerFile = path.resolve(process.cwd(), `api/${routeName}.ts`);

          try {
            const module = await server.ssrLoadModule(handlerFile);
            if (module && typeof module.default === 'function') {
              if (req.method === 'POST' && !(req as any).body) {
                const buffers: Buffer[] = [];
                for await (const chunk of req) {
                  buffers.push(chunk);
                }
                const data = Buffer.concat(buffers).toString();
                try {
                  (req as any).body = JSON.parse(data);
                } catch {
                  (req as any).body = data;
                }
              }

              (res as any).status = (statusCode: number) => {
                res.statusCode = statusCode;
                return res;
              };
              (res as any).json = (data: any) => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
                return res;
              };

              await module.default(req, res);
              return;
            }
          } catch (err) {
            console.error(`Error executing API route ${req.url}:`, err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Internal API error during dev execution' }));
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), apiDevPlugin()],
});
