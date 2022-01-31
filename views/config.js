function configViews(app) {
  app.set('views', './views');
  app.set('view engine', 'ejs');
}
module.exports = { configViews };
