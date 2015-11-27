var client = require("twilio");
var fs = require("fs");
var path = require("path");

function readConfig(config) {
  var configFile = fs.readFileSync(config, "utf-8");
  return JSON.parse(configFile);
}

var text = {
  sendMessage: function(to, message) {
    // connect to twillio;
    var config = readConfig("./config.json")
    var twilio = client(config.twilio.accountSID, config.twilio.authToken)
    twilio.sendMessage({
      to: to,
      from: config.twilio.number,
      body: message
    }, function(err, responseData) {
      if (err) {
        console.log(err)
      }
    })
  }

}

module.exports = text
