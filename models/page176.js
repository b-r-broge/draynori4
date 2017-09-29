const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page176Schema = new Schema({

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

const Page176 = mongoose.model('Page176', page176Schema);

module.exports = Page176;
