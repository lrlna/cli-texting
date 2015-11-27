var fs = require("fs");
var path = require("path");
var through = require("through2");

var configFile = path.join(__dirname, "../config.json")

var addContact = {
  // initialize with argvs
  init: function(argv) {
    if (!argv.name || !argv.phone) {
      // ask for missing arguments
      console.log("Missing phone or name")
    } else {
      addContact.addContactToConfig(argv.name, argv.phone) 
    }
     
  }, 
  // add contact to config if it exists
  addContact: function(name, phone) {

    fs.stat(configFile, function(err, stat) {
      if (!!stat) {
        var readConfig = fs.readFile(configFile)
          .pipe(through.obj(changeConfigFile))
          .on("data", function(data) {
            console.log(data)
          })
      }
    })
  },

  changeConfigFile: function(chunk, enc, done) {

  }

}

module.exports = addContact;
