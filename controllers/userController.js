const User = require('../models/userModel');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

    if (!username || !password) {
      return res.status(401).json({ message: 'Invalid username or password'});
    }
    console.log('username: ', username);
    console.log('password:', password);

    const newUser = await User.create({ username, password });
   

    console.log('newuser', newUser);
    res.locals.users = newUser;
    return next();
  } catch(err) {
    return next({
      log: 'Error in createUser'
    });
  }

};

userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found'});
    }

    // console.log('user: ', user);

    const auth = await User.comparePasswords(password, user.password);
    if (!auth) return res.status(401).json({ message: 'Invalid password' });

     
    res.locals.users = user;

    // console.log('res.locals.users: ', res.locals.users);
    return next();
  } catch (err) {
    return next({
      log: 'Error in verifyUser'
    });
  }
};



module.exports = userController;