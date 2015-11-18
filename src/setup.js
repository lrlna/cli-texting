var fs = require("fs");

module.exports = {
  "greeting": prompt("Hey stranger, what shall you be called?", function(who) {
    return "Hey, " + who;
  }),
  "twilio accountID": prompt("", function(accountID) {
    return accountID;
  }),
  "twilio accountName": prompt("", function(accountName){
    return accountName;
  }),
  "filename": __filename
  //"twilio accountID": prompt("")
  //"twilio accountName": accountName

}
