const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const spiderSchema = new Schema({

spider: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Spider = mongoose.model('spider', spiderSchema);

module.exports = Spider;
