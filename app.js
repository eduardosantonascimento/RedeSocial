const express = require('express');
const db = require("./src/database/models/db");
const app = express();
const port = 3000;

const userRoutes = require ('./src/routes/userRoutes');

app.use('/users', userRoutes);


app.listen(port, () => {
  console.log(`Example api listening on port ${port}`)
}); 

/*console.log("Começou");

(async () => {
  
  await db.insertCustomer({full_name:'Carolina Machado', email:'carolzinha18@gmail.com',password:'54321', is_active:'1'})
  console.log('SELECT * FROM post');
  const clientes = await db.selectCustomers();
  console.log(clientes);
})();

*/

module.exports = app;