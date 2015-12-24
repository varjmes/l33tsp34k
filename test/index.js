var tap = require('tap')
var leet = require('../index.js')

tap.test('testing basic l33t setup', function (t) {
  var string = leet('charlotte')
  t.equal(string, 'CHARLOTTE')
  t.end()
})
