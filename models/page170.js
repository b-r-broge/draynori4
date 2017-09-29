const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page170Schema = new Schema({

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

const Page170 = mongoose.model('Page170', page170Schema);

module.exports = Page170;
