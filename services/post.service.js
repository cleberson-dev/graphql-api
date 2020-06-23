const { Post, User } = require('../models');

async function getPosts() {
  const posts = await Post.findAll();

  const promises = await Promise.all(posts.map(async (post) => {
    const { id, title, content, createdAt, userId } = post;
    const user = await User.findByPk(userId);

    return {
      id,
      title,
      content,
      author: {
        id: user.id,
        username: user.username
      },
      postedAt: createdAt
    };
  }));

  return promises;
}

async function getPostsByUser(userId) {
  const user = await User.findByPk(userId);
  if (!user) throw Error("Usuário não encontrado");

  const posts = await Post.findAll({ where: { userId }});

  const promises = await Promise.all(posts.map(async (post) => {
    const { id, title, content, createdAt } = post;

    return {
      id,
      title,
      content,
      author: {
        id: user.id,
        username: user.username
      },
      postedAt: createdAt
    };
  }));

  return promises;
}

async function createPost(title, content, userId) {
  const user = await User.findByPk(userId);
  if (!user) throw Error("Usuário não encontrado");
  
  const post = await Post.create({ title, content, userId });

  return {
    id: post.id,
    title: post.title,
    content: post.content,
    author: { id: user.id, username: user.username },
    postedAt: post.createdAt
  };
}



module.exports = {
  getPosts, createPost, getPostsByUser
}