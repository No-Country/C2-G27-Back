const routerApi = require('./routes')
const express = require('express');
const cors = require('cors');
const { configViews } = require('./views/config');
const { boomErrorHandler, sequelizeErrorHandler } = require('./middlewares/error.handler');
const logger = require('morgan');
require('dotenv').config();

const app = express();
configViews(app);
routerApi(app);

app.get('/', (req, res) => {
  res.render('index', { title: 'Fintech' });
});

app.use(express.json());
app.use(cors());
//middlewares
app.use(logger('tiny'));
app.use(boomErrorHandler);
app.use(sequelizeErrorHandler);

const port = process.env.PORT;

app.listen(port, () => {
})
