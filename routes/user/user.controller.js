import User from '../../models/User';
import passport from 'passport';

const getUser = (req, res, next) => {
    res.send('respond with a resource : getUser');
};

const addUser = (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
    };

    User.register(user, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/index');
        }
    });
};

const login = passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true });
module.exports = { getUser, addUser, login };
