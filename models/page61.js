const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page61Schema = new Schema({

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

const Page61 = mongoose.model('Page61', page61Schema);

module.exports = Page61;
