const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page101Schema = new Schema({

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

const Page101 = mongoose.model('Page101', page101Schema);

module.exports = Page101;
