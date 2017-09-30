const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const caveSchema = new Schema({

cave: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Cave = mongoose.model('cave', caveSchema);

module.exports = Cave;
