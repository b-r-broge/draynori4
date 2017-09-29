const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page165Schema = new Schema({

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

const Page165 = mongoose.model('Page165', page165Schema);

module.exports = Page165;
