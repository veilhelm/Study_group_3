const axios = require("axios")
const EventEmiter = require("events")
const Post = require("../model/post.model")

class PostController extends EventEmiter {
  createAPost = async ( req, res ) => {
    try {
      const { data } = await axios({
        method: "GET",
        baseURL: process.env.POST_URL, 
        url: "posts/1",
      })
      const post = await new Post(data)
      post.title = post.title.toUpperCase().slice(0,10)
      post.save()
      res.status(200).json(post)
    } catch (error) {
      console.dir(error)
      if(error.response.status === 404) res.status(500).json({status:500, message:"internal server error, please try again"})
    }
  }
}

const postController = new PostController()
postController.on('postCreated', () => console.log("a post was created"))
module.exports= postController
