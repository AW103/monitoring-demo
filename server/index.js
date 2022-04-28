const express = require('express');
const app= express();
const path = require('path');

// // include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'f539452d365a4a378e3c90b5454dc952',
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