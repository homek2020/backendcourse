import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    userId: {type: String, required: true},
    id: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    body: {type: String, required: true},
})

export default mongoose.model('Post', Post);