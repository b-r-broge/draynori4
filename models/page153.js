const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page153Schema = new Schema({

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

const Page153 = mongoose.model('Page153', page153Schema);

module.exports = Page153;
