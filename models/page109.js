const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page109Schema = new Schema({

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

const Page109 = mongoose.model('Page109', page109Schema);

module.exports = Page109;
