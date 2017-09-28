const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page105Schema = new Schema({

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

const Page105 = mongoose.model('Page105', page105Schema);

module.exports = Page105;
