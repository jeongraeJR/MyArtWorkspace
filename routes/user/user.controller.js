import User from '../../models/User';
import passport from 'passport';
const userController = {};

userController.getUser = (req, res, next) => {
    res.send('respond with a resource : getUser');
    console.log(req.user);
};

userController.addUser = (req, res, next) => {

    const user = {
        name: req.body.name,
        email: req.body.email,
    };

    const userExists = User.findOne({email:req.body.email});

    if(userExists){
        //error
        res.json({ success: 'fail', message: '이미 존재하는 사용자입니다.' });
    }
    else {
        User.register(user, req.body.password, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/signup');
            }
        });
    }

  
};
userController.login = passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true });
export default userController;
