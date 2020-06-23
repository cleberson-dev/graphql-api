const Sequelize = require('sequelize');

const db = require('../config/db');
const User = require('./User');

const Post = db.define('post', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.DataTypes.UUIDV4
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      max: 50 
    }
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      min: 20
    }
  },
  userId: {
    type: Sequelize.UUID,
    references: {
      model: User,
      key: 'id'
    }, 
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  }
});

module.exports = Post;