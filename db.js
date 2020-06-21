const Sequelize = require('sequelize');

// Variáveis de ambiente
const POSTGRES_DB = process.env.POSTGRES_DB || 'test';
const POSTGRES_USER = process.env.POSTGRES_USER || 'root';
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || '';


const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
  dialect: 'postgres'
});

module.exports = sequelize;