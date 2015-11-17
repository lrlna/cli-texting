#! /usr/bin/env node 
var app = require("express")();
var twilio = require("twilio");
var clc = require("cli-color");
var http = require('http').Server(app);
var Text = require("./src/text.js");
var Config = require("./src/config.js");

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
.command("add", "Add you contacts", function(yargs) {
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

var text = new Text(argv);
var config = new Config();

if (argv._[0] === "config"){
  config.init();
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


