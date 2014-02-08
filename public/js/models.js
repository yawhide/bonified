<<<<<<< HEAD
/**
 * makes a backbone user model. This will be called from backbone
    to call the nodejs app.get('/getHighScores', ...) method to
    get all the specified user's highscores
*/
=======

>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
var User = Backbone.Model.extend({
    url: '/getHighScores'
});

<<<<<<< HEAD
/**
 * makes a backbone singleUser model. This will be called from backbone
    to call the nodejs app.get('/search', ...) method which will
    get the top 10 highscores from the mongodb
*/
=======

>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
var SingleUser = Backbone.Model.extend({
    url: '/search'
});

<<<<<<< HEAD
/**
 * makes a backbone user model. This will be called from backbone
    to call the nodejs app.get('/addHighScore', ...) method which
    will add a highscore to the mongodb 
*/
=======
>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
var AddUser = Backbone.Model.extend({
    url: '/addHighScore'
});
