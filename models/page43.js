const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page43Schema = new Schema({

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

const Page43 = mongoose.model('Page43', page43Schema);

module.exports = Page43;
