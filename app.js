const express = require("express");
const bodyParser = require('body-parser');
const hbs = require("express-handlebars");
const routes = require("./routes/routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.engine("hbs", hbs({
    defaultLayout: "default",
    extname: ".hbs"
}));
app.set("view engine", ".hbs");
app.use("/", routes);

module.exports = app;