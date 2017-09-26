const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page2Schema = new Schema({

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
  option4: {
    type: String,
    required: true,
  },

})

const Page2 = mongoose.model('Page2', page2Schema);

module.exports = Page2;
