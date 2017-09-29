const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page168Schema = new Schema({

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

const Page168 = mongoose.model('Page168', page168Schema);

module.exports = Page168;
