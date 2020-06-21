const Sequelize, { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const User = require('./User');
const Post = require('./Post');

class Comment extends Model {}
Comment.init({
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: uuidv4
  },
  postId: {
    type: Sequelize.STRING,
    allowNull: false,
    references: Post,
    key: 'id',
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  },
  userId: {
    type: Sequelize.STRING,
    allowNull: false,
    references: User,
    key: 'id',
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