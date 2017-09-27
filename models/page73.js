const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page73Schema = new Schema({

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

const Page73 = mongoose.model('Page73', page73Schema);

module.exports = Page73;
