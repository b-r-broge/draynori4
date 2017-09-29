const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page150Schema = new Schema({

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

const Page150 = mongoose.model('Page150', page150Schema);

module.exports = Page150;
