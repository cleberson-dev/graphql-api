const { Comment, User, Post } = require('../models');

async function createComment(content, postId, userId) {
  const post = await Post.findByPk(postId);
  const commentUser = await User.findByPk(userId);

  if (!post || !commentUser) throw Error("Usuário e/ou post não encontrado");

  const postUser = await User.findByPk(post.userId); 
  
  const comment = await Comment.create({ content, userId, postId });

  return {
    id: comment.id,
    content: comment.content,
    commentedAt: comment.createdAt,
    post: {
      id: post.id,
      title: post.title,
      content: post.content,
      author: {
        id: postUser.id,
        username: postUser.username
      }, 
      postedAt: post.createdAt
    },
    user: {
      id: commentUser.id,
      username: commentUser.username
    }
  }
}

async function getCommentsByPost(postId) {
  const post = await Post.findByPk(postId);
  const postAuthor = await User.findByPk(post.userId);

  if (!post) throw Error("Post não encontrado");

  const postComments = await Comment.findAll({ where: { postId } });

  return Promise.all(postComments.map(async (comment) => {
    const commentUser = await User.findByPk(comment.userId);

    return {
      id: comment.id,
      content: comment.content,
      commentedAt: comment.createdAt,
      post: {
        id: post.id,
        title: post.title,
        content: post.content,
        author: {
          id: postAuthor.id,
          username: postAuthor.username
        }, 
        postedAt: post.createdAt
      },
      user: {
        id: commentUser.id,
        username: commentUser.username
      }
    }
  }));
}

async function getCommentsByUser(userId) {
  const user = await User.findByPk(userId);
  if (!user) throw Error("Usuário não encontrado");

  const comments = await Comment.findAll({ where: { userId }});

  return Promise.all(comments.map(async (comment) => {
    const post = await Post.findByPk(comment.postId);
    const postAuthor = await User.findByPk(post.userId);

    return {
      id: comment.id,
      content: comment.content,
      commentedAt: comment.createdAt,
      post: {
        id: post.id,
        title: post.title,
        content: post.content,
        author: {
          id: postAuthor.id,
          username: postAuthor.username
        }, 
        postedAt: post.createdAt
      },
      user: {
        id: user.id,
        username: user.username
      }
    };
  }));
}

module.exports = {
  createComment, getCommentsByPost, getCommentsByUser
}