const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold203Schema = new Schema({

gold203: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold203 = mongoose.model('gold203', gold203Schema);

module.exports = Gold203;
