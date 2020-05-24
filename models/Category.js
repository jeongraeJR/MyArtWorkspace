
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name : String,
    uid : mongoose.Schema.Types.ObjectId
})

const model = mongoose.model('Category',categorySchema);
export default model;