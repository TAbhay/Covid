const express = require('express');
const router = express.Router();
const {covidworld,covidcountries,covidbycountry,covidbycontinents} = require("../controllers/covid");

router.get('/',function(req,res){
    res.render("covid/home.ejs");
});
router.get("/world",covidworld);
router.get("/countries",covidcountries);
router.get("/country/:country",covidbycountry);
router.get("/:continents",covidbycontinents);
module.exports = router;