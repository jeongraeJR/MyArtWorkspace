
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    uid : mongoose.Schema.Types.ObjectId,
    title : String,
    contents: String,
    attachment: Array,
    tools: Array,
    workingTime: Number,
    category: mongoose.Schema.Types.ObjectId
}) 

const model = mongoose.model('Post',postSchema);
export default model;
