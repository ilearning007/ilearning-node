var express = require("express");
var bodyParser = require('body-parser');
var hbs = require("express-handlebars");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var routes = require("./routes/routes");
var passport = require("passport");
require("./controllers/passport/passport")(passport);

const app = express();

app.use(cookieParser());
app.use(session({
	secret : "secret",
	resave : false,
	saveUninitialized : false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// view engine setup
app.engine("hbs", hbs({
    defaultLayout: "default",
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

module.exports = app;