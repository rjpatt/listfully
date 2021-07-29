const models = require('../models/listModels');
const bcrypt = require('bcrypt');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    await models.User.create({ username: username, email: email, password: password })
    return next();
  } catch (err) {
    return next({ log: `createUser controller encountered error: ${err}`, message: err });
  }
}

userController.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    res.locals.userPassed = false;
    const userAuth = await models.User.findOne({ email: email });
    if (!userAuth) return next();
    const hash = userAuth._doc.password;
    const passCheck = await bcrypt.compare(password, hash);
    if (passCheck) {
      res.locals.userPassed = true;
    }
    return next();
  } catch (err) {
    return next({ log: `login controller encountered error: ${err}`, message: err });

  }
}

module.exports = userController;