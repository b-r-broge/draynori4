const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page14Schema = new Schema({

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

const Page14 = mongoose.model('Page14', page14Schema);

module.exports = Page14;
