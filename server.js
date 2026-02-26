const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 10000;

app.get("/api/time", (req, res) => {
    const now = new Date();
    res.json({
        time: now.toLocaleTimeString(),
        date: now.toDateString(),
        iso: now.toISOString()
    });
});

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});