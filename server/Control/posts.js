
import postMessage from '../Models/postMessage.js';


export const getPosts = async (req, resp)=> {
    // resp.send("this is control dir and the file name is posts.js -> a replaceemnt for posts.js")
    try {
        const postMess = await postMessage.find();
        resp.status(200).json("this worked currently in posts.js in control folder", postMess)
    } catch (error) {
        resp.status(404).json(error.message)
        
    }
}

export const createPost = async (req, resp) =>{
    // resp.send("thsi is message?")

    const post = req.body;

const newPost = new postMessage(post)
    try {
        await newPost.save();
        resp.status(401).json("this is for creating new post!!", newPost)
        
    } catch (error) {
        resp.status(409).json({message : error.message})
        
    }
}