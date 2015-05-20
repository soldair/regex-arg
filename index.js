
var safe = require('safe-regex');


module.exports = function(search,unsafe){
  if(!search || !search.indexOf) return ;

  if(search.indexOf('/') === 0){
    if(!safe(search) && !unsafe){
      return false;
    }

    var flags = search.match(/\/([gi]+)?$/);
    if(flags) flags = flags[1];

    var base = search.replace(/^\//,'').replace(/\/([gi]+)?$/,'')
    return new RegExp(base,flags)
  }
  
}


