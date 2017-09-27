const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page78Schema = new Schema({

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

const Page78 = mongoose.model('Page78', page78Schema);

module.exports = Page78;
