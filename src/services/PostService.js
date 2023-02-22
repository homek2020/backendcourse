import Post from "../model/Post.js";

class PostService {

    static async create (post) {
        const createdPost = await Post.create(post);
        return createdPost;
    }

    static async getAll () {
        const posts = await Post.find();
        return posts;
    }

    static async getById (id) {
        if (!id) {
            throw Error('Bad request, no id');
        }
        const post = await Post.findOne({id: id});
        return post;
    }

    static async delete (id) {
        if (!id) {
            throw Error('Bad request, no id');
        }
        const deleteResult = await Post.deleteOne({id: id});
        return deleteResult;
    }

}

export default PostService;