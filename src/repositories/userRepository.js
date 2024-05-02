const httpStatus = require("../utils/statusCode");
const ApiError = require("../utils/ApiError")
const db = require("../models");
const User = db.User;


class UserRepository{
  getAll() {
    try {
      return User.findAll(
        { attributes: ['id', 'full_name', 'email',] }
      );
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
}};

module.exports = UserRepository();
