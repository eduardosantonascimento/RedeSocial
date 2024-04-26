const httpStatus = require("../../utils/statusCode");
const ApiError = require("../../utils/ApiError")

class UserRepositoryImplementation{
  async getAll(){
    return User.findAll(
        { attributes: ['id', 'full_name', 'email',] }
    );
};
}

module.exports = UserRepositoryImplementation();
