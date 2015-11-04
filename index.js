#! /usr/bin/env node 
var path = require("path");
var fs = require("fs");
var clc = require("cli-color");
var http = require('http');
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

var text = new Text();

if (argv.to){
  text.sendMessage();
} else {
  require("yargs").showHelp();
}

// need to create server and get this module to start a server when running; 
//http.createServer(function(req, res) {
//  // Twiml response; 
//  var resp = new twilio.TwimlResponse();
//  
//  res.writeHead(200, {
//    "Content-Type": "text/xml"
//  })
//  
//  console.log(resp.toString());
//  res.end(resp.toString());
//
//}).listen(1337);


