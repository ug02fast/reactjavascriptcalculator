var express = require('express');
var path = require('path');
var webpack = require('webpack');
var app = express();

app.use(express.static(__dirname))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: __dirname
    });
  }).listen(process.env.PORT || 8080, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:8080');
  });
