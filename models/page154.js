const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page154Schema = new Schema({

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

const Page154 = mongoose.model('Page154', page154Schema);

module.exports = Page154;
