function Start () {
    var self = {}

    self.command = ''

    self.describe = ''

    self.builder = {
        with: {
            alias: 'w',
            describe: 'Start a conversation with a contact',
            type: 'string'
        },
        message: {
            alias: 'm',
            describe: 'Your text message goes here',
            type: 'string'
        }
    }

    self.handler = function (argv) {
      // refactor start conversation argv to be here
    }
}

exports.Start
