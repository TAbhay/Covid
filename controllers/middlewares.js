const unirest = require('unirest');
const express = require('express');

exports.connectRapidApi = function(req, res, next) {
   var myreq;
   myreq.headers({
        "x-rapidapi-key": process.env.xkey,
        "x-rapidapi-host": process.env.xhost,
        "useQueryString": true
    });
    req.connect = myreq;
    next();
};