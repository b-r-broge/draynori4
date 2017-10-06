const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page232Schema = new Schema({

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

const Page232 = mongoose.model('Page232', page232Schema);

module.exports = Page232;
