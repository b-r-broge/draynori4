const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page77Schema = new Schema({

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

const Page77 = mongoose.model('Page77', page77Schema);

module.exports = Page77;
