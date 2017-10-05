const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page217Schema = new Schema({

  text: {
    type: String,
    // required: true,
  },
  option1: {
    type: String,
    // required: true,
  },
  option2: {
    type: String,
    // required: true,
  },
  option3: {
    type: String,
    // required: true,
  },

})

const Page217 = mongoose.model('Page217', page217Schema);

module.exports = Page217;
