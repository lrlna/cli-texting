var fs = require("fs");
var path = require("path");
var through = require("through2");

var configFile = path.join(__dirname, "../config.json")

function AddContact() {
  this.name = argv.name
  this.phone = argv.phone
}
  // initialize with argvs
AddContact.prototype.init = function(argv) {
  if (!this.argv.name || !this.argv.phone) {
    // ask for missing arguments
    console.log("Missing phone or name")
  } else {
    addContact.addContactToConfig() 
  }
} 
  // add contact to config if it exists
AddContact.prototype.addContactToConfig = function() {
  fs.stat(configFile, function(err, stat) {
    if (!!stat) {
      fs.readFile(configFile, "utf-8", changeConfigFile)
    }
  })
}

AddContact.prototype.changeConfigFile = function(err, data) {
  if (err) console.log(err)
  var file = JSON.parse(data) 
  // store contact in config json file
  var contact = {}
  contact.name = this.name
  contact.phone = this.phone
  file.contacts.push(contact)
  fs.writeFile(configFile, JSON.stringify(file, null, 2), function(err) {
    if (!err) console.log([
      "Your contact %j has been added", 
      "You can start texting with <text start>"
    ].join("\n"));
  })
   
}

module.exports = AddContact;
