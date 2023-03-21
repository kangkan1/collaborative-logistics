const Sequelize = require('sequelize');
const sequelize = new Sequelize( {
  dialect: 'sqlite',
  storage: './db/db.sqlite'
});
const User = sequelize.define('users', {
    id: {
      type: Sequelize.NUMBER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  },{ timestamps: false });
  module.exports = User;
  