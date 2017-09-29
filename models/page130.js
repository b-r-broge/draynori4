const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page130Schema = new Schema({

  text: {
    type: String,
  },
  option1: {
    type: String,
  },
  option2: {
    type: String,
  },
  option3: {
    type: String,
  },
  option4: {
    type: String,
  },
  option5: {
    type: String,
  },

})

const Page130 = mongoose.model('Page130', page130Schema);

module.exports = Page130;
