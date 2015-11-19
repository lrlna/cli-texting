var fs = require("fs");

// Get Twilio information from the user;
module.exports = {
  "displayName": prompt("Hey stranger, what shall you be called?", function(displayName) {
    return displayName;
  }),
  "twilio accountSID": prompt("Twilio accountSID", function(accountSID) {
    return accountSID;
  }),
  "twilio authToken": prompt("Twilio authToken", function(authToken){
    return authToken;
  }),
  "twilio number": prompt("Twilio Phone number", function(phoneNumber) {
    return phoneNumber;
  })
}
