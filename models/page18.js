const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page18Schema = new Schema({

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

const Page18 = mongoose.model('Page18', page18Schema);

module.exports = Page18;
