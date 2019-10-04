const express = require('express');
const requireAll = require('require-all');
const fs = require('fs');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser());

app.use(cors({
  origin: /forestadmin\.com$|localhost:.*/,
  allowedHeaders: ['Authorization', 'X-Requested-With', 'Content-Type'],
  maxAge: 86400, // NOTICE: 1 day
  credentials: true,
}));


fs.readdirSync('./decorators/routes').forEach((file) => {
  if (file[0] !== '.') {
    app.use('/forest', require(`./decorators/routes/${file}`));
  }
});

// fs.readdirSync('./routes').forEach((file) => {
//   if (file[0] !== '.') {
//     app.use('/forest', require('./routes/' + file));
//   }
// });


// app.use(require('forest-express-sequelize').init({
//   modelsDir: __dirname + '/models',
//   envSecret: process.env.FOREST_ENV_SECRET,
//   authSecret: process.env.FOREST_AUTH_SECRET,
//   sequelize: require('./models').sequelize
// }));

requireAll({
  dirname: __dirname + '/middlewares',
  recursive: true,
  resolve: Module => new Module(app),
});

module.exports = app;
