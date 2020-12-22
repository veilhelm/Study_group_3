const EventEmiter = require('events');
const User = require('../models/user.model');
const createSearchParams = require('../utils/createSearchParams');

class UserController extends EventEmiter {
  createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  };

  getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params._id);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  };

  getUserByEmail = async (req, res) => {
    console.log(req.query);
    try {
      const user = await User.findOne({ ...req.query });
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  };

  getusers = async (req, res) => {
    try {
      const users = await User.find(createSearchParams(req.query)); 
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  };
}

const userController = new UserController();
userController.on('userCreated', () => console.log('a user was created'));
module.exports = userController;
