const express = require('express');
const app= express();
const path = require('path');

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4545;

app.listen(port, () => console.log(`Sever listening on ${port}`))