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
    comments(postId: ID): [PostComment]
  }

  type Mutation {
    createUser(username: String, email: String, password: String): User
    createPost(title: String, content: String, userId: ID): Post
    createComment(postId: ID, userId: ID, content: String): PostComment
  }
`;
