#! /usr/bin/env node 
var app = require("express")();
var twilio = require("twilio");
var clc = require("cli-color");
var http = require('http').Server(app);
var Text = require("./text.js");

var argv = require("yargs")
.usage("Usage: [$0] your text here")
.options({
  "config": {
    default: './config.json'
  }
})
.describe({
  "to": "Send message to:",
  "m": "Contents of the message"
})
.argv

var text = new Text(argv);

if (argv.to){
  text.sendMessage();
} else {
  require("yargs").showHelp();
}


app.get('/', function(req, res){
  res.send();
});

// need to create server and get this module to start a server when running; 
http.listen(3000, function() {
  // Twiml response; 
  //var resp = new twilio.TwimlResponse();
  //
  //res.writeHead(200, {
  // "Content-Type": "text/xml"
  //})
  //
  //res.end(resp.toString());

});


