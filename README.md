# Two Tap Web Integration example

This is a very simple example of integrating Two Tap on a desktop website. It uses nodejs as the backend server.

## Install

* git clone this repository
* npm install ejs express
* edit app.js and add your own Two Tap PUBLIC_TOKEN and PRIVATE_TOKEN
* node app.js and visit http://localhost:2500

## The confirm callback call

When the shopper confirms the purchase a [callback](https://twotap.com/docs#mobile_callback_url) is sent to this server. Because the callback is server-side this nodejs instance must be web accessible in order for it to work.

## Interesting files

* app.js (set up a PUBLIC_TOKEN, PRIVATE_TOKEN)
* integration_iframe.ejs (this is called to startup the Two Tap HTML5 interface, you will see how to pass different variables)
* integration.ejs / integration.css (some UI suggestions)

## Questions?

Write to us at support@twotap.com