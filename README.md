# Two Tap Web Integration example

This is a very simple example of integrating Two Tap on a desktop website. It uses nodejs as the backend server.

You don't have to use this component. Feel free to embed Two Tap directly inside your existing platform (rails/django/anything).

## Install

* git clone this repository
* npm install
* edit app.js and add your own Two Tap PUBLIC_TOKEN and PRIVATE_TOKEN
* node app.js and visit http://localhost:2500

## The confirm callback call

When the shopper confirms the purchase a [callback](https://twotap.com/docs#mobile_callback_url) is sent to this server. Because the callback is server-side this nodejs instance must be web accessible in order for it to work.

## Interesting files

* app.js (set up a PUBLIC_TOKEN, PRIVATE_TOKEN)
* views/integration_iframe.ejs (this is called to startup the Two Tap HTML5 interface, you will see how to pass different variables)
* views/integration.ejs / integration.css (some UI suggestions)
* routes/integrations.js / purchaseConfirmCallback method

## Questions?

Write to us at support@twotap.com.
