const ApiError = require ('../utils/ApiError');
const httpStatus = require("../utils/statusCode");
const userRepository = require("../repositories/userRepository");

class UserService {
  async getAllUsers() {
    const users = await userRepository.getAll();
    if (!users) throw new ApiError(httpStatus.NOT_FOUND, 'No users was found!');
    return users;
  };
}

module.exports = new UserService();
