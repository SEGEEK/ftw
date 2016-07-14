//import express from 'express';
var express = require('express');
var path = require('path');

var app = express();

var staticDir = path.join(__dirname, 'public')
app.use(express.static(staticDir));

console.log('Listening on port 3000 ...');
console.log('staticDir is ', staticDir);
app.listen(3000);