const express = require('express');
const cors = require('cors');
const fs = require('fs/promises'); // Use the promises version of the 'fs' module
const app = express();

app.use(cors());

let clickCount;

// Read the initial count from the file on server startup
fs.readFile('clickCount.txt', 'utf-8')
  .then(data => {
    clickCount = parseInt(data, 10) || 0;
  })
  .catch(err => {
    console.error('Error reading clickCount.txt:', err);
  });

app.get("/api", (req, res) => {
  res.json({ "users": ["Karina", "Austin", "Derek"], clickCount });
});

app.options("/api/increment-click-count", cors());

app.post("/api/increment-click-count", cors(), async (req, res) => {
  clickCount++;
  res.json({ clickCount });

  // Write the updated count to the file
  await fs.writeFile('clickCount.txt', clickCount.toString(), 'utf-8');
});

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
