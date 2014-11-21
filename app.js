
/**
 * Module dependencies.
 */


var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var integrations = require('./routes/integrations.js')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// express setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


// development
if (app.get('env') === 'development') {
  app.set('port', process.env.PORT || 2500);  

  app.set('own_url', 'http://localhost:2500');
  app.set('mobile_url', 'https://checkout.twotap.com');
  app.set('api_url', 'https://api.twotap.com');
  app.set('public_token', '6ad2af4e0e1e2fb08de9');
  app.set('private_token', 'TWOTAP_PRIVATE_TOKEN');

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production
if (app.get('env') === 'production') {
  app.set('port', process.env.PORT || 9200);  

  app.set('own_url', 'http://localhost:2500');
  app.set('mobile_url', 'https://checkout.twotap.com');
  app.set('api_url', 'https://api.twotap.com');
  app.set('public_token', '6ad2af4e0e1e2fb08de9');
  app.set('private_token', 'TWOTAP_PRIVATE_TOKEN');

  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}


app.get('/', integrations.integration);
app.get('/integration_iframe', integrations.integrationIframe);

app.post('/purchase_confirm_callback', integrations.purchaseConfirmCallback);

app.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});