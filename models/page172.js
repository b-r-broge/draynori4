const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page172Schema = new Schema({

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

const Page172 = mongoose.model('Page172', page172Schema);

module.exports = Page172;
