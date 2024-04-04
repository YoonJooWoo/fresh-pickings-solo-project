const User = require('../models/userModel.js');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

    if (!username || !password) {
      return res.status(401).json({ message: 'Invalid username or password'});
    }
    const newUser = await User.create({ username, password });
   

    console.log('newuser', newUser);
    res.locals.users = newUser;
    return next();
  } catch(err) {
    return next(err);
  }

};

userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found'});
    }
    const auth = await User.comparePasswords(password, user.password);
    if (!auth) return res.status(401).json({ message: 'Invalid password' });

    res.locals.users = user;
    return next();
  } catch (err) {
    return next(err);
  }
};



module.exports = userController;