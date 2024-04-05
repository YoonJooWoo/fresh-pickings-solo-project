const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    user.password = await bcrypt.hash(user.password, salt);
    return next();
  } catch (err) {
    return next({
      log: 'Error in userSchema'
    });
  }
});

userSchema.statics.comparePasswords = async function(password, hashedPassword) {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (err) {
    throw new Error('Error comparing password');
  }
};

module.exports = mongoose.model('User', userSchema);