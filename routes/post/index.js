import express from 'express';
var router = express.Router();
import postController from './post.controller';
import parseForm from '../../middleware/parseForm';

/* GET users listing. */
//router.get('/', postController.getPosts);
router.post('/', parseForm, postController.addPost);
router.get('/', postController.getPost);


module.exports = router;
