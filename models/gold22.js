const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold22Schema = new Schema({

gold22: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold22 = mongoose.model('gold22', gold22Schema);

module.exports = Gold22;
