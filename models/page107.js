const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page107Schema = new Schema({

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

const Page107 = mongoose.model('Page107', page107Schema);

module.exports = Page107;
