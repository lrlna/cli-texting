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
  addContactToConfig: function(name, phone) {

    fs.stat(configFile, function(err, stat) {
      if (!!stat) {
        var config = fs.readFile(configFile, "utf-8", function(err, data) {
          var file = JSON.parse(data) 
          var contact = {}
          contact.name = name
          contact.phone = phone
          file.contacts.push(contact)
          console.log(file)
        })
      }
    })
  },

  changeConfigFile: function(chunk, enc, done) {
    var file = JSON.parse(chunk)


  }

}

module.exports = addContact;
