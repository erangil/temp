var tm = require('./testModule.js');

console.log(tm);

console.log(tm);

tm.message = "Ran the great!";

var tm2 = require('./testModule.js');

console.log(tm2);

tm2.invisible();
