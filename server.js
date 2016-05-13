'use strict';

var express = require('express');
var app = express();
var http = require("http");
var net = require("net");

app.use(function (req, res) {

    });
    


app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + process.env.PORT + '...');
});