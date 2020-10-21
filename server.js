const { capitalizeWord } = require('./helpers/utils');
const server = require('express');
const hbs = require('hbs');
require('./hbs/helpers');
const app = server();
const port = process.env.PORT || 5000;
const appName = 'Aprendiendo NodeJS - Curso';

app.use(server.static(`${__dirname}/public`));
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);

// #region Routes
app.get('/', (req, res)=> {
  res.render('index', {
    appName,
    url: req.url,
  });
});

app.get('/contact', (req,res) => {
  res.render('contact', {
    appName: `${capitalizeWord(req.url.slice(1), 1)} - ${appName}`,
    url: req.url,
  });
});
// #endregion Routes

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
