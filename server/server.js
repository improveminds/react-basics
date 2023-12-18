// server/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express.js!' });
});

app.listen(port, () => {
  console.log(`Express.js server is running at http://localhost:${port}`);
});
