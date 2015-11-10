var client = require("twilio");
var fs = require("fs");
var path = require("path");

function readConfig(config) {
  var configFile = fs.readFileSync(config, "utf-8");
  return JSON.parse(configFile);
}

function Text(argv) {
  this.to = argv.to;
  this.message = argv.m;
  this.config = argv.config;
}


Text.prototype.sendMessage = function() {
  // connect to twillio;
  var config = readConfig(this.config);
  var twilio = client(config.twilio.accountSID, config.twilio.authToken);
  twilio.sendMessage({
    to: this.to,
    from: config.twilio.number,
    body: this.message
  }, function(err, responseData) {
    if (err) {
      console.log(err);
    }
  });
}

Text.prototype.config = function() {
        
}

module.exports = Text;
