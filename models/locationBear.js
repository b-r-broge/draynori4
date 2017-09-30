const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const bearSchema = new Schema({

bear: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Bear = mongoose.model('bear', bearSchema);

module.exports = Bear;
