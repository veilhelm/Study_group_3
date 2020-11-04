const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.route('/').post(userController.createUser);
router.route('/').get(userController.getUserById);
router.route('/byEmail').get(userController.getUserByEmail);
router.route('/filter').get(userController.getusers);

module.exports = router;
