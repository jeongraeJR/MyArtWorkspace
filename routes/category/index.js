import express from 'express';
var router = express.Router();
import category from './category.controller';

/* GET users listing. */
router.get('/', category.getCategory);

module.exports = router;
