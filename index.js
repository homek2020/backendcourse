import express from 'express';
import mongoose from 'mongoose';
import Post from "./src/model/Post.js";
import router from "./src/router/index.js";


const PORT = 5000;
const DB_URL = 'mongodb+srv://homekru:qwerty123456@cluster0.3xdptpj.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use('/api',router);

async function startApp () {
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('hello world'));
    } catch (e) {
        console.log(e);
    }
}

startApp();