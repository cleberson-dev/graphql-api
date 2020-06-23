const CommentService = require('../services/comment.service');

module.exports = {
  Query: {
    comments: (root, args) => {
      const { postId } = args;
      return CommentService.getCommentsByPost(postId);
    }
  },
  Mutation: {
    createComment: (root, args) => {
      const { content, postId, userId } = args;
      return CommentService.createComment(content, postId, userId);
    }
  }
}