const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const page88Schema = new Schema({

  text: {
    type: String,
    // required: true,
  },

})

const Page88 = mongoose.model('Page88', page88Schema);

module.exports = Page88;
