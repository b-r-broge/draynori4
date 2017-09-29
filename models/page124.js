const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page124Schema = new Schema({

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

const Page124 = mongoose.model('Page124', page124Schema);

module.exports = Page124;
