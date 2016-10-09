var path = require("path")
var promzard = require("promzard")
var prompt = require("prompt")
var fs = require("fs")

var configFile = path.join(__dirname, "../config.json")

exports.command = 'config'

exports.desribe = 'Set up your twillio access keys'

exports.handler = function (argv) {
  const self = {}

  var overwrite

  self.init = function () {
    // check if file exists already
    fs.stat(configFile, function(err, stat) {
      // use logger to log
      if (!!stat) {
        console.log("Config file already exists")
        self.yesOrNo("Are you sure you want to overwrite", function(result) {
          overwrite = result
          if (!result) {
            console.log("Ok, will not be overwriting your existing config file.")
            process.exit()
          } else {
            self.createConfigFile()
          }
        })
      } else {
        self.createConfigFile()
      }
    })
  }

  self.createConfigFile = function(data) {
    const setuprc = path.join(__dirname, "../src/setup.js")

    promzard(setuprc, function(err, data) {
      // set up twilio
      var twilio = {}

      console.log([
        "Hey! This is your friendly text module initialization.",
        "Have your Twilio keys ready before we begin!",
        "",
        "ctrl-c at anytime if you wish to quit this setup process"
      ].join("\n"))
      // use logger to log
      if (err) console.log(err);

      twilio.twilio = data
      twilio.contacts = []
      self.writeToFile(JSON.stringify(twilio, null, 2))

    })
  }
  self.writeToFile = function(data) {
    fs.writeFile(configFile, data, function(err) {
      // use logger to log
      if (!err) console.log([
        "Your config is all setup!",
        "You can start texting with <text start>"
      ].join("\n"));
    })
  }

  self.yesOrNo = function(message, done) {
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

      result.yesno === 'yes' ? done(true) : done(null)
    })

  }

  self.init()
}
