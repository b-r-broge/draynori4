const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page206Schema = new Schema({

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

const Page206 = mongoose.model('Page206', page206Schema);

module.exports = Page206;
