const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const kukuSchema = new Schema({

kuku: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Kuku = mongoose.model('kuku', kukuSchema);

module.exports = Kuku;
