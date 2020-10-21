const hbs = require('hbs');
hbs.registerHelper('isPossibleAddActiveClass', (view, req='') => {
  return view === req ? true : false;
});