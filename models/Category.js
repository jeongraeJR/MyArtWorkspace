
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name : String
})

const model = mongoose.model('Category',categorySchema);
export default model;