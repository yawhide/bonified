
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database

<<<<<<< HEAD
/**
 * We used mongoLab to host our mongo database.
 * in the url0 variable we needed to specify an address provided
    by mongolab
*/
=======
>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
var username = "stephan"; 
var localUsername = "localhost";
var password = "mongo"; 
var localPassword = "27017";
var address = '@ds047458.mongolab.com:47458/rememberalldb';
var localAddress = "/rememberalldb";
connect();
// Connect to mongo
function connect() {

    var url0 = 'mongodb://' + username + ':' + password + address;
    var url1 = 'mongodb://' + localUsername + ':' + localPassword + localAddress;

    mongoose.connect(url0);
    console.log("Database connected!");
}
function disconnect() {mongoose.disconnect()}

