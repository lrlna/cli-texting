var fs = require("fs");
var path = require("path");
var promzard = require("promzard");

function Init() {
  this.argv = 0;
}

// check if config.json exists
// if exists -- warn user file exists
Init.prototype.exists = function() {
}

Init.prototype.init = function() {
  var textrc = path.join(__dirname, "config.json");
  fs.stat(textrc, function(err, stat) {
    if(err === null) {
      return true;
    } else {
      return false;
    } 
  })
    
}
// ask if want to overwrite
// if yes, overwrite twilio id's
// if does not exist, create a file
// then ask user for twilio information

module.exports = Init;
