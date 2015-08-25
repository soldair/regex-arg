# regex-arg

take an input string in regex literal format and return it as a regex with flags.
uses [safe-regex](https://www.npmjs.com/package/safe-regex) to ensure that user provided regex can't take down the server.

```js
var re = require('regex-arg')

var string = "/hi/i"

re(string).test("HI") === true

```

## api

- regexArg = require('regex-arg')
- regexArg(string, unsafe)
  - string, the regex to make
  - if unsafe is truthy allow unsafe regexps to return from this function. warning these can take down your server so only unsafe regex that are trusted should be used and should really really be rewritten,



