const { combineResolvers } = require('apollo-resolvers');

const userResolvers = require('./user.resolvers');
const postResolvers = require('./post.resolvers');
const commentResolvers = require('./comment.resolvers');

const resolvers = combineResolvers([
  userResolvers,
  postResolvers,
  commentResolvers
]); 

module.exports = resolvers;
