// PSEUDO CODE

// # Rules
// 6 initial attempts to guess word correctly
// Player wins if he/she guesses word before 6 attemps are used
// Player loses when attempts == 0

// # Definitions
// array of words = wordbank
// array of letters = alphabet
// attempts remaining = 6

// # Functionality
// Game starts upon page load

// # Display
// Rules
// Blank spaces
// Alphabet
// Number of attempts

// As long as (attempts > 0){
// Game is live...  
//  Display to user: "Guess a letter"
//  User guesses letter by clicking letter in displayed alphabet
//  if (letter exists word){
//      for each instance of that letter in word{
//          change blank space to guessed letter
//          mark letter as used in the alphabet and make it unclickable
//      }
//  }
//  elseif (letter does NOT exist in word){
//          mark letter as used in the alphabet and make it unclickable
//          deduct 1 from number of attempts remaining
//  }

//  if (guessed word == current word from wordbank){
//      Stop program / exit loop
//      Display "Game is over. You win."
//      Display exit options
//  }
// }
// Otherwise{
//  Stop program / exit loop
//  Display "Game is over. You lose."
//  Display exit options
// }

// variable that contains an array of the game words to choose from 
var wordChoices = ["nomadic", "indignant", "disparity", "androgynous", "pragmatic", "patronage", "dilapidated"]

// hints for each word
var wordHints = ["hint1", "hint2", "hint3", "hint4", "hint5", "hint6", "hint7", "hint8"]

// array of each letter in the alphabet to choose from
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// number of chances remaining displayed to the user
// document.getElementById("chances").innerHTML = attempts;

// creates a random number to choose a random index from the "wordChoices" array
var randomNum = Math.floor(Math.random() * wordChoices.length);

// assigns the current word to the value of the current word at the random index number 
var currentWord = wordChoices[randomNum]

// attempts remaining = 6
var attempts = 6;
document.getElementById("chances").innerHTML = (attempts);

// creates a blank array to have dashes pushed to
var blank = []

// creates a for loop that starts at 0 and cycles through the alphabet length then adds 1
for (let i = 0; i < alphabet.length; i++) {
    // creates a new element named "div" for each letter in the alphabet loop (a ghost div that isn't seen by the user)
    var div = document.createElement('div');
    // uses DOM to print to the HTML the alphabet array at its current index
    var letters = document.createTextNode(alphabet[i])
    div.appendChild(letters);
    // adds the class "letterBox" to each of the divs that were created
    div.classList.add('letterBox');
    // as the loop cycles, a new div will be created (i.e. button1, button2, etc)
    div.id = "button" + i;
    // places the divs that were created within the body HTML element
    document.body.appendChild(div);
    // places all of the classes with 'letterBox' inside a variable called "box"
    var box = document.getElementById(div.id);
    // console.log(box)

    // creates an event listener that upon clicking...
    box.addEventListener('click', function() {

        document.getElementById('button' + i).style.backgroundColor = 'orange';
        checkWord(alphabet[i])
    })
}

// pushes dashes based on the current word length
for (i = 0; i < wordChoices[randomNum].length; i++) {
    blank.push('_')
    // creates blank space between dashes
    document.getElementById("guessLine").innerHTML = blank.join(' ');
}

// creates a function called "checkWord" that allows the variable "guessedLetter" to be passed as an argument
function checkWord(guessedLetter) {
    bool = false
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == guessedLetter) {
            bool = true
            blank[i] = guessedLetter
            document.getElementById("guessLine").innerHTML = blank.join(' ');

        }
    }
    if (!bool) {
        attempts--
        document.getElementById("chances").innerHTML = attempts;
    }
    if (currentWord == blank.join('')){
        alert('You win!')
    }

    else if (attempts == 0) {
        alert("You lose")
        location.reload()
    }
}


console.log(currentWord)


