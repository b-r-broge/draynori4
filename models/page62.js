const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page62Schema = new Schema({

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

const Page62 = mongoose.model('Page62', page62Schema);

module.exports = Page62;
