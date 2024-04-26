const ApiError = require ('../utils/ApiError');
const httpStatus = require('../utils/statusCode');
const userService = require ('../service/userService');

class UserController {
  async getUsers(req, res){
    const users = await userService.getAllUsers();
    return res.status(httpStatus.OK).json(users);
  };
}

module.exports = new UserController();
