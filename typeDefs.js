const { gql } = require("apollo-server");

module.exports = gql`
  type User {
    id: ID!
    username: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    postedAt: String!
  }

  type PostComment {
    id: ID!
    post: Post!
    user: User!
    content: String!
    commentedAt: String!
  }



  type Query {
    user(usernameOrEmail: String): User
    posts: [Post]
    comments(postId: Int): [PostComment]
  }
`;
