const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: String,
  email: String,
  phoneNumber: Number,
  age: Number,
});

const User = new model('User', UserSchema);
module.exports = User;
