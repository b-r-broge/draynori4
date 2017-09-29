const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page156Schema = new Schema({

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

const Page156 = mongoose.model('Page156', page156Schema);

module.exports = Page156;
