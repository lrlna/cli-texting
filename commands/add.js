var fs = require("fs");
var path = require("path");
var through = require("through2");

var configFile = path.join(__dirname, "../config.json")

exports.command = 'add'

exports.describe = 'Add a contact to your address book'

exports.builder = {
  name: {
    alias: 'n',
    describe: 'Name of contact',
    type: 'string'
  },
  phone: {
    alias: 'ph',
    desribe: 'Phone number of contact with area code',
    type: 'string'
  }
}

exports.handler = function (argv) {
  // refactor add contact stuff to be here
  Add.name = argv.name
  Add.phone = argv.phone

  Add.init(argv)
}

// do the thing! adding a contact to address book
function Add () {
  var self = {}

  self.name
  self.phone


  // initialize with argv
  self.init = function (argv) {
    if (!argv.name || !argv.phone) {
      // ask for missing arguments
      console.log("Missing phone or name")
    } else {
      self.addContactToConfig()
    }
  }

  // add contact to config if config exists
  self.addContactToConfig = function () {
    fs.stat(configFile, function(err, stat) {
      if (!!stat) {
        fs.readFile(configFile, "utf-8", self.changeConfigFile)
      }
    })
  }

  self.changeConfigFile = function (err, data) {
    if (err) console.log(err)

    var file = JSON.parse(data)
    // store contact in config json file
    var contact = {}

    contact.name = self.name
    contact.phone = self.phone

    file.contacts.push(contact)

    fs.writeFile(configFile, JSON.stringify(file, null, 2), function(err) {
      if (!err) console.log([
        "Your contact %j has been added",
        "You can start texting with <text start>"
      ].join("\n"));
    })
  }

}
