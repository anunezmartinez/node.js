var url = require("url");
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var query = url.parse(adr, true);

console.log(query.host); //returns 'localhost:8080'
console.log(query.pathname); //returns '/default.htm'
console.log(query.search); //returns '?year=2017&month=february'

var qdata = query.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'