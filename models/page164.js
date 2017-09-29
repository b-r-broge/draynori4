const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page164Schema = new Schema({

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

const Page164 = mongoose.model('Page164', page164Schema);

module.exports = Page164;
