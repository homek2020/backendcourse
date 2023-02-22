import {Router} from "express";
import PostController from "../conroller/PostController.js";
import postController from "../conroller/PostController.js";

const router = new Router();

router.get('/posts', PostController.getAll);
router.post('/posts', PostController.create);
router.get('/posts/:id', PostController.getById);
router.put('/posts');
router.delete('/posts/:id', PostController.delete);

export default router;