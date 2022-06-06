import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";


// Create new post 
export const createPost = async(req, res)=> {
    // const newPost = req.body    [can write also like below line]
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()
        res.status(200).jsno("Post created!")
    } catch (error) {
        res.status(500).json(error)
    }
}

// Get a post

export const getPost = async(req, res)=> {
    const id = req.params.id

    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
       req.status(500).json(error) 
    }
}

// Update a post
export const updatePost = async(req, res)=> {
      const  postId = req. params.id
      const {userId} = req.body

      try {
          const post = await PostModel.findById(postId)
          if(post.userId === userId)
          {
              await post.updateOne( { $set : req.body})
              res.status(200).json("Post Updated.")
          }
          else{
              res.status(403).json("Action forbidden")
          }
      } catch (error) {
          res.status(500).json(error)
      }
}

// Delete a post 
export const deletePost = async (req, res)=>{
    const id = req.params.id;
    const {userId} = req.body

    try {
        const post = await PostModel.findById(id);
        if(post.userId === userId)
        {
           await post.deleteOne();
           res.status(200).json("Post deleted successfully!")
        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}
