const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page175Schema = new Schema({

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

const Page175 = mongoose.model('Page175', page175Schema);

module.exports = Page175;
