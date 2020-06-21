const Sequelize, { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

class User extends Model {}
User.init({
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: uuidv4
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      min: 8,
      max: 16
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});