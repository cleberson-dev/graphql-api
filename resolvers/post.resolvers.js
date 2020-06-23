const { Post, User, Comment } = require("../models");
const PostService = require("../services/post.service");


module.exports = {
  Query: {
    posts: () => PostService.getPosts()
  },
  Mutation: {
    createPost: (root, args, context, info) => {
      const { title, content, userId } = args;
  
      return PostService.createPost(title, content, userId);
    }
  }
}