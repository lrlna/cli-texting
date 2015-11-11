var fs = require("fs");
var path = require("path");

function Config() {
  this.argv = 0;
}

// check if config.json exists
// if exists -- warn user file exists

Config.prototype.ifExists = function() {
  var textrc = path.join(__dirname, "textrc.json");
  fs.stat(textrc, function(err, stat) {
    if(err === null) {
      console.log("file exists");
    } else {
      console.log("file does not exist");
    } 
  })
}
// ask if want to overwrite
// if yes, overwrite twilio id's
// if does not exist, create a file
// then ask user for twilio information

module.exports = Config;
