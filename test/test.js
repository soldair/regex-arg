var test = require('tape');
var re = require('../')

test("can",function(t){
 
  t.ok(!re(),'should return not if no args')
  t.ok(!re("foo"),"should not return anything if not re literal")

  t.ok(re('/foo/'),'should return re if valid')

  t.equals("ab FOO cb".match(re('/foo/i'))[0],'FOO','should find foo match')
  t.end()
})
