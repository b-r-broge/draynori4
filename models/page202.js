const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page202Schema = new Schema({

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

const Page202 = mongoose.model('Page202', page202Schema);

module.exports = Page202;
