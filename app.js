
/**
 * Module dependencies.
<<<<<<< HEAD
 * This is where we "require" all the necessary libraries
    and/or models that our node server needs.
 */

 var express = require('express')
=======
 */

 var express = require('express')
 , routes = require('./routes')
 , user = require('./routes/user')
>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
 , http = require('http')
 , path = require('path')
 , User = require('./models/User.js')
 , fs = require('fs')
 , _ = require('underscore')
 , Backbone = require('backbone')
 , exphbs = require('express3-handlebars');

 var app = express();

<<<<<<< HEAD
/**
 * All the environments
 * This is all auto-generated
 * app.set('port') => this line is where you can specify the port
    at which the app runs on.
*/
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/views');
=======
//conf.ports.server;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
app.engine('handlebars', exphbs({defaultLayout : 'main'}));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

<<<<<<< HEAD
/**
 * This method reads the index.html file in the public directory.
    if the current URL is the index page '/'.
*/
=======

>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
app.get('/', function(req, res){
    fs.readFile('./public/index.html', function(error, content){
        if(error){
            res.writeHead(500);
            res.end();
        }
        else{
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(content, 'utf-8');
        }
    });
});

<<<<<<< HEAD
/**
 * Sends the frontend the result of calling User.getTopHighscore
    which is a multi-layered JSON object 
 * User is a User model from the models/User.js file.
 * getTopHighscore is a mongoose method from the models folder.
*/
=======
>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
app.get('/getHighScores', function(req,res){

    User.getTopHighscore(function(err, collection){
        if(err != null){
            console.log("ERRORRRR!!!!");
            res.send(err);
        }
        else{
            console.log("Collection is gotten");
            res.send(collection);
        }
    });
});

<<<<<<< HEAD
/**
 * Receives a username from the frontend and calls findOneHighscore
    to find all the highscores that specific uses has entered
    in the database. It then sends the frontend a multi-layered JSON
    object.
 * User is a User model and findOneHighscore is a mongoose method,
    both are form the models/User.js file
*/
=======


>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
app.post('/search', function(req, res){

    var username = req.body.username;

     User.findOneHighscore(username, function(err, collection){

        if(err != null){
                    console.log("ERRORRRR!!!!");
                    res.send(err);
                }
                else{
                    console.log(collection);
                    res.send(collection);
                }
     });
});

<<<<<<< HEAD
/**
 * Receives a username and a highscore from the frontend and calls
    addUser which posts those two pieces of info into the mongoDB
    database. It then sends the frontend a status of success or 
    fail.
 * User is a User model and findOneHighscore is a mongoose method,
    both are form the models/User.js file
*/
=======
>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
app.post('/addHighScore', function(req, res) {
    var username = req.body.username;
    var highscore = req.body.highscore;
    console.log(highscore);
    User.addUser(username, highscore, function(err, user) {
        if(err != null){   
            console.log(err);    
            res.send(err);
        }
        else{
            res.send(user);
        }
        
    }); 
});

<<<<<<< HEAD
/**
 * Auto generated, starts the nodejs server
*/
=======

>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
