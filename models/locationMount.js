const mongoose = require('mongoose');


let Schema = mongoose.Schema;

const mountSchema = new Schema({

mount: {
  type: String,
},
user: {
  type: String,
  ref: 'User',
},
})

const Mount = mongoose.model('mount', mountSchema);

module.exports = Mount;
