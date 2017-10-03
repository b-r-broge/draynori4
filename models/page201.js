const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page201Schema = new Schema({

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
  }

})

const Page201 = mongoose.model('Page201', page201Schema);

module.exports = Page201;
