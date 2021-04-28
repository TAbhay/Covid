const express = require('express');
const app     = express();
const unirest = require('unirest');

exports.covidworld = function(req,res){
    var getURL = process.env.xurl + "world";
   // console.log(getURL);
    var myreq = unirest("GET", getURL);
    myreq.headers({
        "x-rapidapi-key": process.env.xkey,
        "x-rapidapi-host":process.env.xhost,
        "useQueryString": true
    });

    myreq.end(function (result) {
        if (result.error){
            return;
        }
        var world = result.body;  
     
       res.render("covid/world.ejs",{ world });
    });
};
exports.covidcountries = function(req, res){
    var getURL = process.env.xurl + "countries";
   // console.log(getURL);
    var myreq = unirest("GET", getURL);
    myreq.headers({
        "x-rapidapi-key": process.env.xkey,
        "x-rapidapi-host":process.env.xhost,
        "useQueryString": true
    });

    myreq.end(function (result) {
        if (result.error){
            console.log(result.error);
            return;
        }
       var countries = result.body; 
       console.log(countries[0]); 
       res.render("covid/countries.ejs",{ countries});
    });
};
exports.covidbycountry = function(req, res){
    var getURL = process.env.xurl + req.params.country;
   console.log(getURL);
    var myreq = unirest("GET", getURL);
    myreq.headers({
        "x-rapidapi-key": process.env.xkey,
        "x-rapidapi-host":process.env.xhost,
        "useQueryString": true
    });

    myreq.end(function (result) {
        if (result.error){
            return;
        }
       var country = result.body;  
      
       res.render("covid/country.ejs",{ country});
    });
};
exports.covidbycontinents = function(req, res){
    var getURL = process.env.xurl + req.params.continents;
   // console.log(getURL);
    var myreq = unirest("GET", getURL);
    myreq.headers({
        "x-rapidapi-key": process.env.xkey,
        "x-rapidapi-host":process.env.xhost,
        "useQueryString": true
    });

    myreq.end(function (result) {
        if (result.error){
            console.log(result.error);
            return;
        }
       var continents = result.body;  
       res.render("covid/continents.ejs",{continents});
    });
};
