const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page171Schema = new Schema({

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

const Page171 = mongoose.model('Page171', page171Schema);

module.exports = Page171;
