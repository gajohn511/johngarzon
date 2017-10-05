const db = require("../db/db");
const menuItem = require("../db/models/menuItem");

var item = new menuItem({
  text: "contact us",
  link: "/contact"
})
  .save()
  .then(function(doc) {
    console.log(JSON.stringify(doc, undefined, 3));
  })
  .catch(e => {
    console.log(e);
  });
