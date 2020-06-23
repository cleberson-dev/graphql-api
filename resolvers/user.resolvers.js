const UserService = require("../services/user.service");

module.exports = {
  Query: {
    user: (root, args) => UserService.getUser(args.usernameOrEmail),
  },
  Mutation: {
    createUser: (root, args) =>
      UserService.createUser(args.username, args.email, args.password),
  },
};
