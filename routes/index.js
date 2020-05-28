var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/signup', function (req, res, next) {
  res.render('signup', { title: 'Sign Up' });
});

router.get('/category', function (req, res, next) {
  res.render('category', { title: 'Category' });
});

router.get('/postForm', function (req, res, next) {
  res.render('postForm', { title: 'Category' });
});

module.exports = router;
