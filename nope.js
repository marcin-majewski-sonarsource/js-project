'use strict';
console.log('bla');
Metalsmith(__dirname)
  .use(markdown())
  .use(layouts('handlebars'))
  .build(function(err) {
    if (err) throw err;
  });
