var express = require("express");
var path = require("path");
global.appRoot = path.resolve(__dirname); // set the root to appRoot
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
const hbs = require("hbs");
const moment = require("moment");

var db = require("./db/db");

var routes = require("./routes/index");
var api = require("./routes/api");
// var users = require("./routes/users");

var app = express();

// view engine setup
hbs.registerPartials(__dirname + "/views/partials");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//  Bootstrap
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js")); // redirect bootstrap JS
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css")); // redirect CSS bootstrap
app.use("/fonts", express.static(__dirname + "/node_modules/bootstrap/fonts")); // bootstrap glyphicons halflings
// app.use("/jquery", express.static(__dirname + "/jquery"));

app.use("/", routes);
app.use("/api", api);
// app.use("/users", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  //var d = new Date();
  console.log(
    `error reached @ ${moment().format("MM/DD/YYYY h:m:A")} :`,
    req.url
  );
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err
    });
    // console.log(err);
    // console.log("hello world");
    // if (err) {
    //   console.log(err);
    // } else {
    //   console.log("hello world");
    // }
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
  console.log("inside error2");
});

module.exports = app;
