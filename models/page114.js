const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page114Schema = new Schema({

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

const Page114 = mongoose.model('Page114', page114Schema);

module.exports = Page114;
