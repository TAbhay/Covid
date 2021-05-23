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
            res.render("error.ejs")
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
            res.render("error.ejs")
            console.log(result.error);
            return;
        }
       var countries = result.body; 
       console.log(countries[0]); 
       res.render("covid/countries.ejs",{ countries});
    });
};
exports.covidbycountry = function(req, res){
    var getURL = process.env.xurl + "/country-report-iso-based/"+ req.params.name+ "/" +req.params.iso;
   console.log(getURL);
    var myreq = unirest("GET", getURL);
    myreq.headers({
        "x-rapidapi-key": process.env.xkey,
        "x-rapidapi-host":process.env.xhost,
        "useQueryString": true
    });

    myreq.end(function (result) {
        if (result.error){
            res.render("error.ejs")
            return;
        }
       var country = result.body;  
      console.log(country);
       res.render("covid/country.ejs",{ country});
       //res.render("covid/country.ejs",{ country});
    });
};


