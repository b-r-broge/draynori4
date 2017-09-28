const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page111Schema = new Schema({

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

const Page111 = mongoose.model('Page111', page111Schema);

module.exports = Page111;
