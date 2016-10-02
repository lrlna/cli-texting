#! /usr/bin/env node
var app = require("express")()
var twilio = require("twilio")
var clc = require("cli-color")
var http = require('http').Server(app)
var text = require("./src/text.js")
var config = require("./src/config.js")
var addContact = require("./src/addContact.js")

// parse arguments
var argv = require("yargs")
  .usage("Usage:")
  .command(require('start'))
  .command(require('add'))
  .command(require('config'))
  .help()
  .argv

//app.get('/', function(req, res){
//  res.send()
//})

// need to create server and get this module to start a server when running
//http.listen(3000, function() {
//  // Twiml response
//  //var resp = new twilio.TwimlResponse()
//  //
//  //res.writeHead(200, {
//  // "Content-Type": "text/xml"
//  //})
//  //
//  //res.end(resp.toString())
//
//})


