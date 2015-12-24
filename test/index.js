var tap = require('tap')
var leet = require('../index.js')

tap.test('converts lowercase string', function (t) {
  var string = leet('leetspeak')
  t.equal(string, '1337$p34k')
  t.end()
})

tap.test('converts uppercase string', function (t) {
  var string = leet('LEETSPEAK')
  t.equal(string, '1337$P34K')
  t.end()
})

tap.test('maintains uppercase and lowercase characters', function (t) {
  var string = leet('maiNteNance')
  t.equal(string, 'm41N73N4nc3')
  t.end()
})

tap.test('maintains spacing', function (t) {
  var string = leet('i love to speak like this')
  t.equal(string, '1 10v3 70 $p34k 11k3 7h1$')
  t.end()
})
