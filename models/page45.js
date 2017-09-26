const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page45Schema = new Schema({

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

const Page45 = mongoose.model('Page45', page45Schema);

module.exports = Page45;
