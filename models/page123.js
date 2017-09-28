const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page123Schema = new Schema({

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

const Page123 = mongoose.model('Page123', page123Schema);

module.exports = Page123;
