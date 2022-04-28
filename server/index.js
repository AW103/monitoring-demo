const express = require('express');
const app= express();
const path = require('path');

//// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '4aac13807d29453994994fd6f8d818a6',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4545;

app.listen(port, () => console.log(`Sever listening on ${port}`))