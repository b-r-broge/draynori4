const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page173Schema = new Schema({

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

const Page173 = mongoose.model('Page173', page173Schema);

module.exports = Page173;
