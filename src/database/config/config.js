require('dotenv').config()

module.exports = {
  "development": {
    "username": 'root',
    "password": 'dev123',
    "database": 'social_network',
    "host": 'localhost',
    "dialect": 'mysql',
    "logging": true,
    "define": {
      "timestamps": false
    },
    "pool": {
      "max": 5,
      "min": 0,
      "acquire": 30000,
      "idle": 10000
    }
  },
  "test": {
    "username": 'root',
    "password": 'dev123',
    "database": 'social_network',
    "host": 'localhost',
    "dialect": 'mysql',
    "logging": true,
    "define": {
      "timestamps": false
    }
  },
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
    "logging": false,
    "define": {
      "timestamps": false
    }
  }
}

