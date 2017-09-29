const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page163Schema = new Schema({

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

const Page163 = mongoose.model('Page163', page163Schema);

module.exports = Page163;
