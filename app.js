const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require ('./src/routes/userRoutes');

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
}); 
