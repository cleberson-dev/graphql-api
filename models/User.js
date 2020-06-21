const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const db = require('../db');

class User extends Sequelize.Model {}
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
}, { sequelize: db, modelName: 'user' });