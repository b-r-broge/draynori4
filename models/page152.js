const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page152Schema = new Schema({

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

const Page152 = mongoose.model('Page152', page152Schema);

module.exports = Page152;
