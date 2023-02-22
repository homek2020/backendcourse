import Post from "../model/Post.js";
import PostService from "../services/PostService.js";

class PostController {

    static async create (req, res) {
        try{
            const post = PostService.create(req.body)
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    static async getAll (req, res) {
        try{
            const posts = await Post.find();
            res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    
    static async getById (req, res) {
        try {
            const post = await PostService.getById(req.params);
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    
    static async delete (req, res) {
        try{
            const post = await PostService.delete(req.params);
            res.status(200).json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default PostController;