const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page228Schema = new Schema({

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

const Page228 = mongoose.model('Page228', page228Schema);

module.exports = Page228;
