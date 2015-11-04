var fs = require("fs");
var client = require("twilio");

function readConfig() {
  var configFile = fs.readFileSync(argv.config, "utf-8");
  return JSON.parse(configFile);
}

function Text() {
  
}


Text.prototype.sendMessage = function() {
  // connect to twillio;
  var config = readConfig();
  var twilio = client(config.twilio.accountSID, config.twilio.authToken);
  twilio.sendMessage({
    to: argv.to,
    from: config.twilio.number,
    body: argv.m
  }, function(err, responseData) {
    if (err) {
      console.log(err);
    }
  });
}


module.exports = Text;
