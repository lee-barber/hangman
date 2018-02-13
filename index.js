// PSEUDO CODE WITH OLD CODE AND COMMENTS MIXED IN

// # Rules
// 6 initial attempts to guess word correctly
// Player wins if he/she guesses word before 6 attemps are used
// Player loses when attempts == 0

// # Definitions
// array of words = wordbank

// variable that contains an array of the game words to choose from 
var wordChoices = ["nomadic", "indignant", "disparity", "androgynous", "pragmatic", "patronage", "dilapidated", "putative"]

// array of letters = alphabet

// array of each letter in the alphabet to choose from
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
// attempts remaining = 6
var attempts = 6

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

document.getElementById("chances").innerHTML = attempts;
// OLD CODE WITH COMMENTS

// creates a for loop that starts at 0 and cycles through the alphabet length then adds 1
for (let i = 0; i < alphabet.length; i++) {

    // creates a new element named "div" for each letter in the alphabet loop
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
        document.getElementById("chances").innerHTML = (attempts--);
        console.log(alphabet[i])


        checkWord(alphabet[i])
        // checks to see if the letter is in the word



        // shows the letter on the dotted line if it is correct
        // showLetter(i)

        // hides the letter after being chosen
        // hideLetter(i)
        
    })
}

// -------------------------------------

// creates a function called "checkWord" that allows the variable "guessedLetter" to be passed as an argument
function checkWord(guessedLetter) {

    // creates an if statement that if the variable "currentWord" includes the variable "guessedLetter" then...
    if (currentWord.includes(guessedLetter)) {

        // create an arbitrary variable that is assigned to the value of the variable "currentWord" at the index of the variable "guessedLetter"
        var n = currentWord.indexOf(guessedLetter);

        // prints the guessedLetter for debugging
        console.log(guessedLetter);

        // showLetter(guessedLetter)
        var dashLetter = document.getElementById("guessLine").textContent;

        // prints the variable dashLetter for debugging
        console.log(dashLetter);

        // creates a variable "dashArray" that is assigned to the value of "dashLetter" split with the argument " " which is just empt spaces 
        var dashArray = dashLetter.split(" ");

        // prints the variable "dashArray" for debugging
        console.log(dashArray);

        // replace dash with correct letter guessed at index (var = n) in the array
        dashArray.splice(n, 1, guessedLetter);

        // prints the variable "dashArray" for debugging
        console.log(dashArray)

        // console.log(ltrArr);
        placeLetter(dashArray);

        // appear on the dotted line

        // remove letter from guessed word so that it doesn't check to that letter again
    } else {
        console.log('incorrect')
    }
}

function showLetter(currentItem) {
    // console.log(alphabet[currentItem])
}

// rounds float to integer (gets # between 0-1) * length of word from array 'wordChoices' (e.g. 5); console.log(randomNum)
var randomNum = Math.floor(Math.random() * wordChoices.length);

var currentWord = wordChoices[randomNum]

var splitWord = currentWord.split('')

console.log(splitWord)

// function checkWord(guessedLetter) {

//     for (let i = 0; i < splitWord.length; i++) {
//      console.log(splitWord[i])
//         if (guessedLetter === splitWord[i]){
//          console.log(guessedLetter)
//         }else {
//          console.log("Incorrect")
//         }
//     }
// }

// creates a blank array to have dashes pushed to
var blank = []

// pushes dashes based on the current word length
    for (i = 0; i < wordChoices[randomNum].length; i++) {
    blank.push('_')
    // creates blank space between dashes
    document.getElementById("guessLine").textContent = blank.join(' ');
    }

console.log(currentWord)

// creates a function called "placeLetter" that... ???
function placeLetter(letterArray){

    // creates blank space between dashes
    document.getElementById("guessLine").textContent = letterArray.join(' ');
}



// Help from Nicole

// function updateState(word, letter) {
//  for (let i = 0; i < word.length; i++) {
//    if (word[i] === letter) {
//      console.log('true');
//    } else {
//      console.log('false');
//    }
//  }
// }