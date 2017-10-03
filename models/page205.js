const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page205Schema = new Schema({

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

const Page205 = mongoose.model('Page205', page205Schema);

module.exports = Page205;
