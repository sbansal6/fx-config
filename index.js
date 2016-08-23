var env = process.env.NODE_ENV ;
var config ;

switch (env) {
case 'PROD':
  config = require('./config/prod.json')
  break;
case 'QA':
  config = require('./config/staging.json')
  break;
default:
  config = require('./config/default.json')
}
module.exports = config ;
