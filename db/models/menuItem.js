var mon = require("mongoose");

var menuItemModel = mon.model("MenuItem", {
  text: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true,
    default: "/"
  },
  id: {
    type: Number,
    required: false,
    default: 1
  }
});

module.exports = menuItemModel;
