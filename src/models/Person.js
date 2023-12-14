const mongoose = require("mongoose");

const Person = mongoose.model("Person", {
  name: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
  approved: {
    type: Boolean,
    require: true,
  },
});

module.exports = Person;
