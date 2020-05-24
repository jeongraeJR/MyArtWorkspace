import express from 'express';
var router = express.Router();
import userController from './user.controller';

/* GET users listing. */
router.get('/', userController.getUser);
router.post('/', userController.addUser);
router.post('/login', userController.login);

module.exports = router;
