const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3394;

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get("/", (req, res) => {
    res.render('index');
})

app.listen(port, function() {
    console.log("App listen at port", port)
})