"use strict";
const express = require('express');
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    let helloMessage = 'Hello World!!';
    res.send(helloMessage);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//              yarn nodemon index.js
//              yarn nodemon --inspect index.js
