const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page174Schema = new Schema({

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

const Page174 = mongoose.model('Page174', page174Schema);

module.exports = Page174;
