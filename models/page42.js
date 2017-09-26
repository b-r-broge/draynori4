const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page42Schema = new Schema({

  text: {
    type: String,
    required: true,
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

const Page42 = mongoose.model('Page42', page42Schema);

module.exports = Page42;
