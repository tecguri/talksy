const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3394;

app.get("/", (req, res) => {
    res.send("Talksy is running.")
})

app.listen(port, function() {
    console.log("App listen at port", port)
})