const express = require('express');
const router = express.Router();
const {covidworld,covidcountries,covidbycountry} = require("../controllers/covid");

router.get('/',function(req,res){
    res.render("covid/home.ejs");
});
router.get("/world",covidworld);
router.get("/countries",covidcountries);
router.get("/country/:name/:iso",covidbycountry);
router.get("/contact",function(req,res){
    res.render("covid/contact");
});
module.exports = router;