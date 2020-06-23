const Sequelize = require('sequelize');

const db = require('../config/db');
const User = require('./User');
const Post = require('./Post');

const Comment = db.define('post_comment', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: Sequelize.DataTypes.UUIDV4
  },
  postId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: Post,
      key: 'id'
    },
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  },
  userId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    },
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      min: 5,
      max: 240
    }
  }
});

module.exports = Comment;