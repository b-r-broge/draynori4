const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page119Schema = new Schema({

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

const Page119 = mongoose.model('Page119', page119Schema);

module.exports = Page119;
