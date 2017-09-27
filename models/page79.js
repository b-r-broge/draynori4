const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page79Schema = new Schema({

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

const Page79 = mongoose.model('Page79', page79Schema);

module.exports = Page79;
