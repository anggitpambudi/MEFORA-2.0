const express = require('express');
const app = express();
const {sequelize} =  require('./models');
const router = require('./routes');
const port = 8080;
const cors = require('cors');

let whitelist = [
  'http://localhost:8080',
  'https://mefora.uc.r.appspot.com/'
];
let corsOption = {
  origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'))
      }
  }
}
app.use(cors(corsOption));
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
app.get("/", (req, res) => {
  res.json({
      message: "Welcome to MEFORA API Backend"
  });
});