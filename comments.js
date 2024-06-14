// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be in the same directory as the comments.js file.
// The comments.html file should display the following message:
// "Hello, this is the comments page."
// The comments.html file should be served with the content-type of text/html.
// The web server should use the http module.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('./comments.html', (err, data) => {
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});