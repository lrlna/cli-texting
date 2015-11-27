#! /usr/bin/env node 
var app = require("express")();
var twilio = require("twilio");
var clc = require("cli-color");
var http = require('http').Server(app);
var text = require("./src/text.js");
var config = require("./src/config.js");
var addContact = require("./src/addContact.js");

// parse arguments; 
var argv = require("yargs")
.usage("Usage:")
.command("start", "Start a conversation", function(yargs) {
  argv = yargs
  .option("with", {
    alias: "w",
    describe: "Start a coversation with contact",
    type: "string"
  })
  .option("message", {
    alias: "m",
    describe: "Text message",
    type: "string"
  })
})
.command("config", "Set up your twilio with this module")
.command("add", "Add you contacts providing a name and a phone number with the area code <add --name [name] --phone [phone]>", function(yargs) {
  argv = yargs
  .option("name", {
    alias: "n",
    describe: "Name of contact", 
    type: "string"
  })
  .option("phone", {
    alias: "p",
    describe: "Phone number of contact with area code",
    type: "string"
  })
})
.argv

if (argv._[0] === "config"){
  config.init()
} if (argv._[0] === "add") {
  addContact.init(argv) 
}  else {
  require("yargs").showHelp()
}


//app.get('/', function(req, res){
//  res.send();
//});

// need to create server and get this module to start a server when running; 
//http.listen(3000, function() {
//  // Twiml response; 
//  //var resp = new twilio.TwimlResponse();
//  //
//  //res.writeHead(200, {
//  // "Content-Type": "text/xml"
//  //})
//  //
//  //res.end(resp.toString());
//
//});


