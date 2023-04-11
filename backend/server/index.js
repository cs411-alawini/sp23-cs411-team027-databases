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

app.get('/display',(req,res)=>{
    var query = connection.query('SELECT DISTINCT GameName FROM GameData NATURAL JOIN GenreData WHERE Action="TRUE" LIMIT 50', function (err, rows, fields) {
        res.send(rows)
        console.log(rows)
    })
})

app.get('/create/:username/:pw',(req,res)=>{
     let p = req.params.username;
     let w = req.params.pw;
     var query = connection.query('INSERT INTO User (userName, password) VALUES (?, ?)',[p, w], function (err, rows, fields) {
        console.log(err)
        console.log(rows)
    })
})
 
app.get('/get/:username',(req,res)=>{
    var query = connection.query('SELECT * FROM User WHERE userName = ? ',req.params.username, function (err, rows, fields) {
        res.send(rows)
    })
})
   
app.get('/update/:username/:password',(req,res)=>{
    var query = connection.query('UPDATE User SET password = ? WHERE userName = ?',[req.params.password,req.params.username], function (err, rows, fields) {
        res.send(rows)
    })
})

app.get('/delete/:username',(req,res)=>{
    var query = connection.query('DELETE FROM User WHERE userName = ? ',req.params.username, function (err, rows, fields) {
        res.send(rows)
    })
})

app.get('/adv1',(req,res)=>{
    var query = connection.query(
        'SELECT DISTINCT Price, GameName, COUNT(GameName) FROM GameData NATURAL JOIN GenreData WHERE Price < 10 AND (Multiplayer = "TRUE" OR Action = "TRUE") GROUP BY Price,GameName UNION SELECT DISTINCT Price, GameName, COUNT(GameName) FROM GameData NATURAL JOIN GenreData WHERE Price > 30 AND SinglePlayer = "TRUE" GROUP BY Price,GameName ORDER BY Price DESC LIMIT 15'
    , function (err, rows, fields) {
        res.send(rows)
        console.log(rows)
        console.log(err)   
    })
})


app.get('/adv2',(req,res)=> {
   var query = connection.query('SELECT GameName, Rating, RequiredAge, COUNT(GameName) FROM GameData WHERE GameName IN (SELECT GameName FROM GameData NATURAL JOIN GenreData WHERE Multiplayer = "TRUE" AND Action = "TRUE") GROUP BY Rating, RequiredAge, GameName ORDER BY Rating DESC, RequiredAge DESC LIMIT 15', function (err, rows, fields) {
        res.send(rows)
    }) 
})

/*
app.get('/basic',(req,res)=> {
    var query = connection.query('SELECT GameName, Rating, Description, FROM GameData', function (err, rows, fields) {
         res.send(rows)
     }) 
 })
*/



app.listen(3001, ()=> {
      console.log(`app is running on port 3001`);
});