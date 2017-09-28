const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page120Schema = new Schema({

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

const Page120 = mongoose.model('Page120', page120Schema);

module.exports = Page120;
