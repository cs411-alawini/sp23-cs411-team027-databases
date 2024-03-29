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

app.get('/search/:game/:minPrice/:maxPrice',(req,res)=>{
    let game = req.params.game 
    let minPrice = req.params.minPrice
    let maxPrice = req.params.maxPrice
    var query = connection.query('CALL searchGameNameAndPrice(?, ?, ?)', [game, minPrice, maxPrice], function (err, rows, fields) {
        console.log(rows)
        res.send(rows)

        if(err) {
            console.log(err);
        }
    })
})


app.get('/searchUser/:game',(req,res)=>{
    var query = connection.query('SELECT password FROM User WHERE userName = ?', [req.params.game], function (err, rows, fields) {
        res.send(rows)

        if(err) {
            console.log(err);
        }
    })
})

app.get('/fav/:us',(req,res)=>{
    var query = connection.query('SELECT GameName, Review, Rating FROM Reviews WHERE userName = ?', [req.params.us], function (err, rows, fields) {
        res.send(rows)

        if(err) {
            console.log(err);
        }
    })
})

app.get('/display',(req,res)=>{
    var query = connection.query('SELECT DISTINCT GameName, Image FROM GameInfo NATURAL JOIN GenreData WHERE Action="TRUE" LIMIT 50', function (err, rows, fields) {
        res.send(rows)
        // console.log(rows)
    })
})

app.get('/searchUser/:us',(req,res)=>{
    var query = connection.query('SELECT GameName, Image FROM GameInfo NATURAL JOIN GenreData WHERE Action="TRUE" LIMIT 50', [req.params.us],function (err, rows, fields) {
        res.send(rows)
        // console.log(rows)
    })
})

//TO FINISH
app.get('/search/highestRatedGames',(req,res)=>{
    var query = connection.query(
        'SELECT GameName, Price, Description,Image FROM GameInfo WHERE GameName LIKE ?  LIMIT 50'
        , [req.params.game], function (err, rows, fields) {
            
        res.send(rows)

        if(err) {
            console.log(err);
        }
    })
})

app.get('/create/:username/:pw',(req,res)=>{
    let p = req.params.username;
    let w = req.params.pw;
    var query = connection.query('INSERT INTO User (userName, password) VALUES (?, ?)',[p, w], function (err, rows, fields) {
        //   console.log(err)
        if(err) {
        console.log(err);
        } else {
            console.log("user", rows)
            res.send("created new user")
        }
    })
})

app.post('/createNewReview/:user/:game/:review/:rating',(req,res)=>{
     let u = req.params.user;
     let g = req.params.game;
     let rev = req.params.review;
     let rating = req.params.rating;
     var query = connection.query('INSERT INTO Reviews(userName, gameName, Review, Rating) VALUES (?, ?, ?,?)',[u,g,rev,rating], function (err, rows, fields) {
        if(err) {
            console.log(err);
        } else {
            console.log("reviews", rows)
            res.send("created new review")
        }
    })
})
 
app.get('/get/:username',(req,res)=>{
    var query = connection.query('SELECT * FROM User WHERE userName = ? ',[req.params.username], function (err, rows, fields) {
        res.send(rows)
    })
})
   
app.get('/update/:username/:password',(req,res)=>{
    var query = connection.query('UPDATE User SET password = ? WHERE userName = ?',[req.params.password,req.params.username], function (err, rows, fields) {
        res.send(rows)
    })
})

app.get('/delete/:username',(req,res)=>{
    var query = connection.query('DELETE FROM User WHERE userName = ?',req.params.username, function (err, rows, fields) {
        res.send(rows)
    })
})

app.get('/adv1',(req,res)=>{
    var query = connection.query(
        'SELECT DISTINCT Price, GameName, COUNT(GameName) FROM GameInfo NATURAL JOIN GenreData WHERE Price < 10 AND (Multiplayer = "TRUE" OR Action = "TRUE") GROUP BY Price,GameName UNION SELECT DISTINCT Price, GameName, COUNT(GameName) FROM GameInfo NATURAL JOIN GenreData WHERE Price > 30 AND SinglePlayer = "TRUE" GROUP BY Price,GameName ORDER BY Price DESC LIMIT 15'
    , function (err, rows, fields) {
        res.send(rows)
        // console.log(rows)
        console.log(err)   
    })
})


app.get('/adv2',(req,res)=> {
   var query = connection.query('SELECT GameName, Rating, RequiredAge, COUNT(GameName) FROM GameInfo WHERE GameName IN (SELECT GameName FROM GameInfo NATURAL JOIN GenreData WHERE Multiplayer = "TRUE" AND Action = "TRUE") GROUP BY Rating, RequiredAge, GameName ORDER BY Rating DESC, RequiredAge DESC LIMIT 15', function (err, rows, fields) {
        res.send(rows)
    }) 
})


app.get('/gameInfo/:gameName',(req,res)=> {
    var query = connection.query('SELECT GameName, Rating, Description, Reviews, Image, Price FROM GameInfo Where GameName = ? LIMIT 20', req.params.gameName , function (err, rows, fields) {
        res.send(rows)
     }) 
 })

app.get('/gameReviews/:gameName',(req,res)=> {
    var query = connection.query('SELECT userName, Review, Rating FROM Reviews WHERE GameName = ? ', req.params.gameName , function (err, rows, fields) {
        console.log("Reviews: ", rows);
        res.send(rows)
     }) 
})

app.get('/gameRating/:gameName',(req,res)=> {
    var rating = 0; 
    var query = connection.query('CALL avgRating(?);', req.params.gameName , function (err, rows, fields) {
        console.log("RATINGS FROM SP: ", rows);
    }) 

    var ratingCount = 0;
    var query3 = connection.query('SELECT count(oneRating) FROM eachRating;', function (err, rows, fields) {
        ratingCount = rows[0]['count(oneRating)']
        console.log("rating count", ratingCount)

        if(ratingCount == 0) {
            var query3 = connection.query('SELECT Rating FROM GameInfo WHERE GameName = ?;', req.params.gameName , function (err, rows, fields) {
                console.log("rows:", rows, rows[0], rows[0]['Rating'])
                rating = rows[0]['Rating']
                console.log("final rating from = 0:", rating) 
                res.send(rows)
            })
        } else {
            var query2 = connection.query('SELECT avg(oneRating) as Rating FROM eachRating;', function (err, rows, fields) {
                rating = rows[0]['avg(oneRating)']
                console.log("final rating from != 0:", rating) 
                res.send(rows)
            }) 
        }
    }) 
})

app.listen(3001, ()=> {
      console.log(`app is running on port 3001`);
});
