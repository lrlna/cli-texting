var fs = require("fs");
var path = require("path");
var promzard = require("promzard");
var prompt = require("prompt");

function Config() {
  this.argv = 0;
}

// check if config.json exists
// if exists -- warn user file exists
Config.prototype.exists = function(file) {
  fs.stat(file, function(err, stat) {
    if(err === null) {
      return true;
    } else {
      return false;
    } 
  })
}

Config.prototype.init = function() {
  var textrc = path.join(__dirname, "config.json");
  
  // warn user what's happening.
  console.log([
    "Hey! This is your friendly text module initialization.", 
    "I am going to walk you through setting up your config.",
    "",
    "Have your Twilio keys ready before we begin!",
    "",
    "ctrl-c at anytime if you wish to quit this setup process"
  ].join("\n"))

  promzard("./src/setup.js", function(err, data) {
    if (err) console.log(err);
    this.writeFile(data);
  })
}

Config.prototype.writeFile = function(data) {
  if(this.exists('./config.json')) {
    console.log([
      "Config file already exists, and it will be overwritten.",
    ].join("\n"));
    this.yesOrNo("Are you sure you want to overwrite", function(err, result ) {
      if (err) console.error(err)
      if (result.yesno === "yes") {
        fs.writeFile(data, function(err, res) {
          if (err) console.error(err);
          if (res) console.log("Your config is all setup!")
        }) 
      }
    })
  }
}

Config.prototype.yesOrNo = function (message, done) { 
  prompt.start()
  
  var property = {
    name: "yesno",
    message: message,
    validator: /y[es]*|n[o]?/,
    warning: "Please respond with yer or no",
    default: 'no'
  }

  prompt.get(property, function(err, result) {
    done(err, result)
  })
}

// ask if want to overwrite
// if yes, overwrite twilio id's
// if does not exist, create a file
// then ask user for twilio information

module.exports = Config;
