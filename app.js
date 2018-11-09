// Modules.
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

//Routers
// const user = require('./routes/user.js');
// const wiki = require('./routes/wiki.js');

// const { addPage } = require('./views');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
// app.use('/wiki', wiki);
// app.use('User', user);

//PORT configuration.

const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`App is listening on port ${PORT}.`);
// });

//Database.
// const { db } = require('./models');
const models = require('./models');

const init = async () => {
  try {
    // await models.User.sync({force: true});
    // await models.Page.sync({force: true});
    await models.db.sync({force: true});
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}.`);
    });
  } catch (error) {
    console.error(error);
  }
};

init();
// db.authenticate()
// then(() => {
//   console.log('connected to the database');
// })

app.use('/', (req, res, next) => {
  res.send('<h1>Welcome to the root.</h1>');
});

// router.get('/', (req, res, next) => {
//   res.send('got to GET /wiki/');
// });

// router.send('/',(req, res, next) => {
//   res.send('got to POST /wiki/');
// });

// router.get('/add', (req, res, next) => {
//   res.send('got to GET /wiki/add');
// });
