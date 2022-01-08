require('dotenv').config();
require('./auth');

const routerApi = require('./routes');
const express = require('express');
const cors = require('cors');
const { configViews } = require('./views/config');
const { boomErrorHandler } = require('./middlewares/error.handler');
const { sequelizeErrorHandler } = require('./middlewares/error.handler');
const { errorHandler } = require('./middlewares/error.handler');
const { logErrors } = require('./middlewares/error.handler');
const logger = require('morgan');
const { checkApiKey } = require('./middlewares/auth.handler');

const app = express();
configViews(app);
routerApi(app);

app.get('/', checkApiKey, (req, res) => {
  res.render('index', { title: 'Fintech' });
});

app.use(express.json());
app.use(cors());
//middlewares
app.use(logger('tiny'));
app.use(boomErrorHandler);
app.use(sequelizeErrorHandler);
app.use(errorHandler);
app.use(logErrors);

const port = process.env.PORT;

app.listen(port, () => {});
