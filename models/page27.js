const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page27Schema = new Schema({

  text: {
    type: String,
    // required: true,
  },
  option1: {
    type: String,
    // required: true,
  },
  option2: {
    type: String,
    // required: true,
  },
  option3: {
    type: String,
    // required: true,
  },

})

const Page27 = mongoose.model('Page27', page27Schema);

module.exports = Page27;
