#! /usr/bin/env node 
var path = require("path");
var fs = require("fs");
var clc = require("cli-color");
var client = require("twilio");
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

var config;

if (argv.to){
  sendMessage();
} else {
  require("yargs").showHelp();
}

function sendMessage() {
  // connect to twillio;
  readConfig();
  var twilio = client(config.twilio.accountSID, config.twilio.authToken);
  console.log(twilio);
  twilio.sendMessage({
    to: argv.to,
    from: config.twilio.number,
    body: argv.m
  }, function(err, responseData) {
    if (err) {
      console.log(err);
    } else {
      console.log(responseData);
    }
  });
}

function readConfig () {
  var configFile = fs.readFileSync(argv.config, "utf-8");
  config = JSON.parse(configFile);
}
