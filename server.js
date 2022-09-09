const express = require("express");
const fs = require("fs");
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/apiRoute')(app);
require('./routes/HTMLRoute')(app);

app.listen(PORT, function() {
    console.log("localhost" + PORT);
});