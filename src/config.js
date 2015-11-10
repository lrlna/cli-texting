var fs = require("fs");
var path = require("path");

function Config() {
  this.argv = 0;
}

// check if config.json exists
// if exists -- warn user file exists

Config.prototype.ifExists() {

}
// ask if want to overwrite
// if yes, overwrite twilio id's
// if does not exist, create a file
// then ask user for twilio information

