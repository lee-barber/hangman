var wordChoices = ["nomadic", "indignant", "disparity", "androgynous", "pragmatic", "patronage", "dilapidated", "putative"]

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]


// creates for loop to create all of the buttons for the letters
for (let i = 0; i < alphabet.length; i++) {
    // creates a ghost div
    var div = document.createElement('div');
    // pulls the individual letter from the array
    var letters = document.createTextNode(alphabet[i])
    // combination of the above 2 lines, allows you to push the text (single letter) into the ghost div... this is similar to using "div.innerHTML = alphabet[i]"
    div.appendChild(letters);   
    // adds a classname to the ghost div (so that ALL of the ghost divs can be targeted later)
    div.classList.add('letterBox');
    // creates a CSS ID for the ghost div (so that individual ghost divs can be targeted later)
    div.id = "button" + i
    // targets the HTML body and adds the ghost div to the code (almost like writing HTML in JS; isntead of writing div boxes for each letter, this creates all of the boxes dynamically)
    document.body.appendChild(div);
    // creates a variable called "box" and ?????????
    var box = document.getElementById(div.id);
    // creates functionality so that the letters are clickable
    box.addEventListener('click', function() {
        checkWord(alphabet[i])
        document.getElementById("box").style.color = "pink";
        // functionality not created yet... can be used to show the letter in a "used" box later 
        // showLetter(i)
        // functionality not created yet... can be used to hide the letter after it has been clicked on and used
        // hideLetter(i)
    })
}



var blank = []

// creates a for loop to create underscores for each letter of the word to be guessed
for (i = 0; i < wordChoices[randomNum].length; i++) {
    blank.push('_')
    // targets the HTML div "guessLine" and adds the underscores from the variable "blank" into div
    document.getElementById("guessLine").textContent = blank.join(' ');
}


// checks if letter guessed is included in word
function checkWord(guessedLetter) {

    if (currentWord.includes(guessedLetter)) {
        // gets the index number of the CORRECT letter that was guessed in the word
        var n = currentWord.indexOf(guessedLetter);
        // creates a variable "dashLetter" and gets the HTML element "guessLine" and then pushes the value to the div ID (similar to innerHTML?) 
        var dashLetter = document.getElementById("guessLine").textContent;
        // creates a variable named "dashArray" that adds dashes between each letter of the word to be guessed
        var dashArray = dashLetter.split(" ");

        dashArray.splice(n, 1, guessedLetter);

        // calls the function placeLetter (see below) and passes the variable "dashArray"
        placeLetter(dashArray);

    } else {

        console.log('incorrect')
    }
}

// shows word with blank spaces
function showLetter(currentItem) {
    
}

var randomNum = Math.floor(Math.random() * wordChoices.length);
var currentWord = wordChoices[randomNum]
var splitWord = currentWord.split('')
console.log(splitWord)




// places letter 
function placeLetter(letterArray) {

    document.getElementById("guessLine").textContent = letterArray.join(' ');
}