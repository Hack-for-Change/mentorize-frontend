const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('querystring');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle CORS headers to allow requests from http://127.0.0.1:5500
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle API routes
  if (req.url === '/api/data' && req.method === 'GET') {
    // Handle a GET request to /api/data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'API response' }));
  } else if (req.url === '/api/data' && req.method === 'POST') {
    // Handle a POST request to /api/data
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const data = parse(body);
      // Process the data and send a response
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });
  } else {
    // Handle other routes or resources here
    const filePath = path.join(__dirname, 'public', req.url);
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(200);
        res.end(content);
      }
    });
  }
});

// Start the server on port 8080
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
