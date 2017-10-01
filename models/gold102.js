const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const gold102Schema = new Schema({

gold102: {
  type: Number,
},
user: {
  type: String,
  ref: 'User',
},
})

const Gold102 = mongoose.model('gold102', gold102Schema);

module.exports = Gold102;
