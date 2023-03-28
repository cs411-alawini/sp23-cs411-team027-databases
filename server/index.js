const express = require('express');
const mysql = require('mysql');
var connection  = require('express-myconnection'); 

const app = express();

var config = {
    user: "cs411",
    database: "data",
    password: "",
    
}


var connection = mysql.createConnection({
host     : '34.28.235.128',
user     : 'cs411',
password : '',
database : 'data'
});

connection.connect()
    
connection.query('SELECT COUNT(RegionName) FROM Region', function (err, rows, fields) {
if (err) throw err

console.log('The solution is: ', rows)
})
