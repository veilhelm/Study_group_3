const EventEmiter = require('events');
const User = require('../models/user.model');
const { sendEmail } = require('../subscribers/user.subscribers');
const { userEvents } = require('../utils/events');

class UserController extends EventEmiter {
  createNewUser = async (req, res) => {
    const user = await User.create(req.body);
    this.emit(userEvents.CREATE_USER, user);
    res.status(201).json(user);
  };
}

const userController = new UserController();
userController.once(userEvents.CREATE_USER, sendEmail);

module.exports = userController;
