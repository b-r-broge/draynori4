const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page110Schema = new Schema({

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

const Page110 = mongoose.model('Page110', page110Schema);

module.exports = Page110;
