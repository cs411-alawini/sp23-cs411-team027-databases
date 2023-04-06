const express = require('express');
const cors = require('cors');

const mysql = require('mysql');
var connection  = require('express-myconnection'); 

const app = express();

app.use(cors());
app.use(express.json());

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

app.get('/test',(req,res)=>{
    var query = connection.query('SELECT DISTINCT GameName FROM GameData NATURAL JOIN GenreData WHERE Action="TRUE" LIMIT 10', function (err, rows, fields) {
        res.send(rows)
        console.log(rows)
    })

})

    
//connection.query('SELECT DISTINCT GameName FROM GameData NATURAL JOIN GenreData WHERE Action ="TRUE"', function (err, rows, fields) {
//if (err) throw err

//console.log('The solution is: ', rows)
//})

 app.listen(3001, ()=> {
      console.log(`app is running on port 3001`);});
