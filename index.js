require('dotenv').config();
require('./auth');

const routerApi = require('./routes');
const express = require('express');
const cors = require('cors');
//const logger = require('morgan');
const { configViews } = require('./views/config');
const { boomErrorHandler } = require('./middlewares/error.handler');
const { sequelizeErrorHandler } = require('./middlewares/error.handler');
const { errorHandler } = require('./middlewares/error.handler');
const { logErrors } = require('./middlewares/error.handler');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index', { title: 'Fintech' });
});

app.use(cors());

configViews(app);
routerApi(app);
//middlewares
//app.use(logger('tiny'));
app.use(logErrors);
app.use(boomErrorHandler);
app.use(sequelizeErrorHandler);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => {});
