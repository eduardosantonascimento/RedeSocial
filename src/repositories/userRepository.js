const { User, sequelize } = require('../database/models/user');
const { QueryTypes } = require('sequelize');

class UserRepository {
  
  async getAll() {
    return User.getAll(
      { attributes: ['id', 'full_name', 'email'] }
    );
  };
}



module.exports = new UserRepository();
