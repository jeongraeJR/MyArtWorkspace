import Category from '../../models/Category';
import mongoose from 'mongoose';
import User from '../../models/User';
const categoryController = {};

categoryController.getCategory = (req, res, next) => {
    res.send('respond with a resource : getUser');
};

categoryController.addCategory = (req, res, next) => {
    if(!req.user) next(new Error("Login Required"));

    const category = new Category({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        uid : req.user._id
    })

    category
    .save()
    .then(result=>{
        User.updateOne({_id:req.user._id}, {$push:
            {'category':result}
        })
        .then(updateResult=>{
            res.json({item:updateResult})
        });
        res.redirect('./category');
    })
    .catch(err => {
        console.log(err);
    })
}
export default categoryController;
