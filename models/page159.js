const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page159Schema = new Schema({

  text: {
    type: String,
  },
  option1: {
    type: String,
  },
  option2: {
    type: String,
  },
  option3: {
    type: String,
  }

})

const Page159 = mongoose.model('Page159', page159Schema);

module.exports = Page159;
