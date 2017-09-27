const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page81Schema = new Schema({

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

const Page81 = mongoose.model('Page81', page81Schema);

module.exports = Page81;
