const express = require("express");
const app = express();
const ejsMate = require("ejs-mate");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const getRoutes = require("./routes/covid")
//const methodOverride = require("method-override");
//const path = require("path");
//const getroutes = require("./routes/covid")
require("dotenv").config();
app.use(express.json());
//app.use(bodyparser.urlencoded({extended:true}));
app.use(cors({ origin: true, credentials: true }));
app.use(morgan("tiny"));
//app.use(methodOverride("_method"));
//mongoose.set("useFindAndModify", false);

app.engine('ejs', ejsMate)
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/public'));

app.use(getRoutes);
//app.use(getroutes);
const port = process.env.PORT || 8000;
app.listen(port, function () {
  console.log(`Server Listening on http://localhost:${port}`);
});