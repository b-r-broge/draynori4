const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page59Schema = new Schema({

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

const Page59 = mongoose.model('Page59', page59Schema);

module.exports = Page59;
