import { createServer } from 'http';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'url';

const PORT = 3001;

// Define allowed files to edit
const ALLOWED_FILES = {
  'portalConfig': 'src/data/portalConfig.json'
};

const server = createServer((req, res) => {
  // CORS Headers for local development
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === '/api/admin/data' && req.method === 'GET') {
    const fileKey = parsedUrl.query.file;
    if (!fileKey || !ALLOWED_FILES[fileKey]) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'Invalid file key' }));
      return;
    }
    
    try {
      const filePath = join(process.cwd(), ALLOWED_FILES[fileKey]);
      const content = readFileSync(filePath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(content);
    } catch (e) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: 'Failed to read file' }));
    }
  } else if (pathname === '/api/admin/data' && req.method === 'POST') {
    const fileKey = parsedUrl.query.file;
    if (!fileKey || !ALLOWED_FILES[fileKey]) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'Invalid file key' }));
      return;
    }

    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const filePath = join(process.cwd(), ALLOWED_FILES[fileKey]);
        // Validate JSON before writing
        JSON.parse(body);
        writeFileSync(filePath, body, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        res.writeHead(500);
        res.end(JSON.stringify({ error: 'Failed to write file. Ensure valid JSON.' }));
      }
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Admin Data Server running at http://localhost:${PORT}`);
});
