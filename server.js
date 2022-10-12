const express = require('express');
const app = express();
const {sequelize} =  require('./models');
const router = require('./routes');
const port = 8000;

app.use(express.json());
app.use(router);
app.listen(port,async function(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return console.log(`listening on port ${port}`)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
});