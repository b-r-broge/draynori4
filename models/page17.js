const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page17Schema = new Schema({

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

const Page17 = mongoose.model('Page17', page17Schema);

module.exports = Page17;
