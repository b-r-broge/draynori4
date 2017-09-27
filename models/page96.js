const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page96Schema = new Schema({

  text: {
    type: String,
  },
  option1: {
    type: String,
  },
  option2: {
    type: String,
  },

})

const Page96 = mongoose.model('Page96', page96Schema);

module.exports = Page96;
