const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page54Schema = new Schema({

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

const Page54 = mongoose.model('Page54', page54Schema);

module.exports = Page54;
