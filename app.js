
/**
 * Module dependencies.
 */

var express = require('express')
  , integrations = require('./routes/integrations')
  , http = require('http')
  , path = require('path')

var app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.set('port', process.env.PORT || 2500);  

  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 

  app.set('own_url', 'http://localhost:2500');
  app.set('mobile_url', 'https://checkout.twotap.com');
  app.set('api_url', 'https://api.twotap.com');
  app.set('public_token', 'TWOTAP_PUBLIC_TOKEN');
  app.set('private_token', 'TWOTAP_PRIVATE_TOKEN');
});

app.configure('production', function(){
  app.set('port', process.env.PORT || 9200);  

  app.set('own_url', 'http://localhost:2500');
  app.set('mobile_url', 'https://checkout.twotap.com');
  app.set('api_url', 'https://api.twotap.com');
  app.set('public_token', 'TWOTAP_PUBLIC_TOKEN');
  app.set('private_token', 'TWOTAP_PRIVATE_TOKEN');
});

app.get('/', integrations.integration);
app.get('/integration_iframe', integrations.integrationIframe);

app.post('/purchase_confirm_callback', integrations.purchaseConfirmCallback);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
