//var { MongoClient, ObjectID } = require("mongodb");
var mongoose = require("mongoose");
var moment = require("moment");
var db;
var dburl = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/JohnApp";
var dboptions = {
  //   server: { reconnectTries: Number.MAX_VALUE }
  useMongoClient: true
};

mongoose.Promise = global.Promise;
mongoose.connect(dburl, dboptions, err => {
  if (err) {
    console.log(JSON.stringify(err, undefined, 2));
    process.exit(1);
  }
  var now = moment();
  console.log(
    `${now.format("MM/DD/YYYY h:m:A")} Connected successfully to: ${dburl}`
  );
  db = mongoose.connection;
});

module.exports = { db };
