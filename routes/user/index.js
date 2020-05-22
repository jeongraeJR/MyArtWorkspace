import express from 'express';
var router = express.Router();
import user from './user.controller';
import passport from 'passport';

/* GET users listing. */
router.get('/', user.getUser);
router.post('/', user.addUser);
router.post('/login', user.login);

module.exports = router;
