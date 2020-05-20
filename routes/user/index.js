/* var express = require('express');
var router = express.Router();
var user = require('./user.controller'); */

import express from 'express';
var router = express.Router();
import user from './user.controller';

/* GET users listing. */
router.get('/', user.getUser);

module.exports = router;
