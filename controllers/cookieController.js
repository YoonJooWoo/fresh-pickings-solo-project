const cookieController = {};

// store user id in a cookie

cookieController.setSSIDCookie = async (req, res, next) => {
  try {
    const { _id } = res.locals.users;
    console.log('_id: ', _id);
    res.cookie('ssid', _id, { httpOnly: true });
    return next();
  } catch (err) {
    next({
      log: 'Error in setSSIDCookie' 
    });
  }
};


module.exports = cookieController;