var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    if (!req.user) {
        res.render('login');
    } else {
        res.render('index', { title: 'My Art Workspace' });
    }
});

router.get('/login', function (req, res, next) {
    res.render('login', { title: 'Login' });
});

router.get('/signup', function (req, res, next) {
    res.render('signup', { title: 'Sign Up' });
});


router.get('/postForm', function (req, res, next) {
    res.render('postForm', { title: 'Category' });
});

router.get('/categoryForm', function (req, res, next) {
    res.render('categoryForm', { title: 'Category' });
});


module.exports = router;
