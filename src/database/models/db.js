const Sequelize = require('sequelize');

const sequelize = new Sequelize("socialnetwork", "root", null, {
  host: 'localhost', 
  dialect: 'mysql'
});

sequelize.authenticate().then(function(){
  console.log("conexão realizada");
}).catch(function(){
  console.log("Erro");
});

module.exports = sequelize;