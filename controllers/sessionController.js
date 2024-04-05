const Session = require('../models/sessionModel.js');

const sessionController = {};

sessionController.startSession = async (req, res, next) => {
  try {
    const { user_ssid } = req.cookies;
    
    // If ssid cookie is not present, 
    const sessionId = user_ssid || res.locals.users._id.toString();
    console.log('req.cookies: ', req.cookies);
    console.log('user_ssid: ', user_ssid);
    console.log('sessionId: ', sessionId);

    await Session.create({ cookieId: sessionId });
    // req.sessionId = sessionId;

    return next();
  } catch (err) {
    return next({
      log: 'Error in startSession'
    });
  }
};

sessionController.clearSession = async (req, res, next) => {
  try {
    res.clearCookie('user_ssid');

    return next();
  } catch (err) {
    return next({
      log: 'Error in clearSession'
    });
  }
};


module.exports = sessionController;