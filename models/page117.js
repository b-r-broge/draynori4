const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page117Schema = new Schema({

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

const Page117 = mongoose.model('Page117', page117Schema);

module.exports = Page117;
