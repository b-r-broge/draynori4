const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page21Schema = new Schema({

  text: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true,
  },
  option2: {
    type: String,
    required: true,
  },
  option3: {
    type: String,
    required: true,
  },

})

const Page21 = mongoose.model('Page21', page21Schema);

module.exports = Page21;
