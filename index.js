#! /usr/bin/env node
var app = require("express")()
var twilio = require("twilio")
var http = require('http').Server(app)

// parse arguments
var argv = require("yargs")
.commandDir('commands')
.demand(1)
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
