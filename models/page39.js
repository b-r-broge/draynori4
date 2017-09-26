const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page39Schema = new Schema({

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

const Page39 = mongoose.model('Page39', page39Schema);

module.exports = Page39;
