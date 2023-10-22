const express = require("express");

const PORT = process.env.PORT || 80;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  res.end();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


// const http = require('http');
 
// const hostname = '127.0.0.1';
// const port = 80;

// console.log(port)
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });