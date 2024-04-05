const cookieController = {};

// store user id in a cookie

cookieController.setSSIDCookie = async (req, res, next) => {
  try {
    const { _id } = res.locals.users;
    console.log('_id: ', _id);
    // res.cookies.delete('ssid');
    res.cookie('user_ssid', _id.toString(), { httpOnly: true });
    console.log('req.cookies in setSSIDCookie: ', await req.cookies);
    return next();
  } catch (err) {
    next({
      log: 'Error in setSSIDCookie' 
    });
  }
};


module.exports = cookieController;