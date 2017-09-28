const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page102Schema = new Schema({

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

const Page102 = mongoose.model('Page102', page102Schema);

module.exports = Page102;
