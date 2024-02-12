const express = require('express')
const cors = require('cors')
const app = express()

// Enable CORS for all routes
app.use(cors());

app.get("/api", (req, res) => {
    res.json({ "users": ["karina", "austin", "derek"]})
})

app.listen(5001, () => {
    console.log("Server started on port 5000")
})