const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page103Schema = new Schema({

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

const Page103 = mongoose.model('Page103', page103Schema);

module.exports = Page103;
