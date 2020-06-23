const { Op } = require('sequelize');
const { User } = require('../models');

async function createUser(username, email, password) {
  const userByUsername = await getUser(username);
  const userByEmail = await getUser(email);
  if (userByUsername) throw Error("Usuário com username já existente.");
  if (userByEmail) throw Error("Usuário com e-mail já existente."); 

  const user = await User.create({ username, email, password });

  return { 
    id: user.id,
    username: user.username
  };
}


async function getUser(usernameOrEmail) {
  const user = await User.findOne({
    where: {
      [Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
    }
  });

  return user;
}

module.exports = {
  getUser, createUser
}