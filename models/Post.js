const Sequelize, { Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const db = require('../db');
const User = require('./User'); 

class Post extends Model {}
Post.init({
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: uuidv4
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
    type: Sequelize.STRING,
    references: User,
    key: 'id',
    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
  }
}, { db, modelName: 'post' }));