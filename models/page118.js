const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page118Schema = new Schema({

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

const Page118 = mongoose.model('Page118', page118Schema);

module.exports = Page118;
