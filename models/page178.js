const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page178Schema = new Schema({

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

const Page178 = mongoose.model('Page178', page178Schema);

module.exports = Page178;
