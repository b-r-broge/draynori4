const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page106Schema = new Schema({

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

const Page106 = mongoose.model('Page106', page106Schema);

module.exports = Page106;
