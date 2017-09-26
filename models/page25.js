const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page25Schema = new Schema({

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

const Page25 = mongoose.model('Page25', page25Schema);

module.exports = Page25;
