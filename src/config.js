var fs = require("fs");
var path = require("path");
var promzard = require("promzard");
var prompt = require("prompt");

var configFile = path.join(__dirname, "../config.json")

config = {
  init: function() {
    // warn user what's happening.
    var setuprc = path.join(__dirname, "./setup.js")
    console.log([
      "Hey! This is your friendly text module initialization.", 
      "Have your Twilio keys ready before we begin!",
      "",
      "ctrl-c at anytime if you wish to quit this setup process"
    ].join("\n"))

    promzard(setuprc, function(err, data) {
      // use logger to log
      if (err) console.log(err);
      var twilio = {}
      twilio.twilio = data
      twilio.contacts = [] 
      fs.stat(configFile, function(err, stat) {
        // use logger to log
        if (!!stat) console.log("Config file already exists, and it will be overwritten")
        config.yesOrNo("Are you sure you want to overwrite", function(result) {
          if (result.yesno === "yes") {
            config.writeToFile(JSON.stringify(twilio, null, 2))
          } else {
            // use logger to log
            console.log("Will not be overwriting your existing config file.")
          }
        })
      })
    })
  },

  writeToFile: function(data) {
    fs.writeFile(configFile, data, function(err) {
      // use logger to log
      if (!err) console.log([
        "Your config is all setup!",
        "You can start texting with <text start>"
      ].join("\n"));
    }) 
  },

  yesOrNo: function(message, done) { 
    prompt.start()
    
    var property = {
      name: "yesno",
      message: message,
      validator: /y[es]*|n[o]?/,
      warning: "Please respond with yer or no",
      default: "yes"
    }

    prompt.get(property, function(err, result) {
      // use logger to log
      if (err) console.log(err)
      done(result)
    })

  }
}

module.exports = config;
