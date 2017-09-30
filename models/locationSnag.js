const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const snagSchema = new Schema({

snag: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Snag = mongoose.model('snag', snagSchema);

module.exports = Snag;
