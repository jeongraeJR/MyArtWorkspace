import mongoose from 'mongoose';
import Post from '../../models/Post';
const postController = {};

postController.addPost = (req, res, next) => {
    if(!req.user) next(new Error("Login Required"));

    const post = new Post({
        _id : new mongoose.Types.ObjectId(),
        uid : req.user._id,
        title : req.body.title,
        contents : req.body.contents,
        workingTime : req.body.workingTime,
        attachment : [req.files.attachment.name]
    })

    post
    .save()
    .then(result=>{
        console.log(result);
        res.redirect('/postForm');
    })
    .catch(err => {
        console.log(err);
    })
};

export default postController;
