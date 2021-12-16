const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide name'],
    maxlength: 50,
    minlength: 3,
    unique: true,
  },

  uid: {
    type: String,
    required: [true, 'Please provide uid'],
    minlength: 4,
  },
});

module.exports = mongoose.model('User', UserSchema);
