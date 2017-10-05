const express = require("express");
var router = express.Router();
const menuItem = require(appRoot + "/db/models/menuItem");

router.get("/menuitems", function(req, res, next) {
  //   res.status(202).send({ msg: "hello world" });
  menuItem
    .find({})
    .then(doc => {
      res.send(doc);
    })
    .catch(e => {
      res.status(500).send(e);
    });
});

module.exports = router;
