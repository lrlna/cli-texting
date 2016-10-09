exports.command = 'start'

exports.describe = 'Start a conversation'

exports.builder = {
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

exports.handler = function (argv) {
  // refactor start conversation argv to be here
}
