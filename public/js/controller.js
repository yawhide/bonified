var text = '';
var currText = '';
var score = 0;
<<<<<<< HEAD
/**
 * this method randomly generates whatever is in the possible variable,
    in this case its all the uppercase letters in the english alphabet
 * when ran it changes currText to whatever the randomly generated
    letter is and concatenates the currText onto text (making it 
    progressively longer)
*/
=======
>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
var makeid = function(){
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//abcdefghijklmnopqrstuvwxyz0123456789";
    currText += possible.charAt(Math.floor(Math.random() * possible.length));
    text+=currText;
<<<<<<< HEAD
};

/**
 * makes a new game by making the currText and text empty strings then
    calling makeid() to generate a new currText/text. It also sets 
    the score to 0.
*/
=======
    //console.log(text);
};

>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
var newGame = function(){
    currText = '';
    text = '';
    makeid();
    score = 0;
};
<<<<<<< HEAD


$(function(){
    $('html').on('click', '#keyboard li', function(){
        var character = $(this).html(); // If it's a lowercase letter, nothing happens to this variable
        
       // Delete
        if ( $(this).hasClass('delete')) {
                       
            $('input[name="write"]').val($('input[name="write"]').val().substr(0, $('input[name="write"]').val().length - 1));
            return false;
        }
        // Add the character
        
        $('input[name="write"]').val($('input[name="write"]').val() + character);
    });
});
=======
>>>>>>> 9576c7986b39f203e28a72d0770dca1c6a12984e
