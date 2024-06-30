import { Post } from "../models/posts.model.js";
import{ ApiResponse} from '../utils/ApiResponse.js'
import axios from 'axios'

const createPost = async (req,res) =>{
    const {post, imageURL} = req.body;
    if(!post)
    return res.status(400).json(
        new ApiResponse(
            400, 
            {},
            "Post cannot be empty!"
        )
    )
    const createdPost = await Post.create(
        {
            content: post,
            image: imageURL
        }
    )
    return res.status(200).json(new ApiResponse( 200, createdPost, "Post created"))
}
export {
    createPost,
}