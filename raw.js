var wordChoices = ["nomadic", "indignant", "disparity", "androgynous", "pragmatic", "patronage", "dilapidated", "putative"]


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

var attempts = 6

document.getElementById("chances").innerHTML = attempts;

for (let i = 0; i < alphabet.length; i++) {

    var div = document.createElement('div');

    var letters = document.createTextNode(alphabet[i])
    div.appendChild(letters);

    div.classList.add('letterBox');

    div.id = "button" + i;

    document.body.appendChild(div);

    var box = document.getElementById(div.id);

    box.addEventListener('click', function() {
        document.getElementById('button' + i).style.backgroundColor = 'orange';
        document.getElementById("chances").innerHTML = (attempts--);
        console.log(alphabet[i])
        checkWord(alphabet[i])

    })
}

function checkWord(guessedLetter) {

    if (currentWord.includes(guessedLetter)) {

        var n = currentWord.indexOf(guessedLetter);

        console.log(guessedLetter);

        var dashLetter = document.getElementById("guessLine").textContent;

        console.log(dashLetter);

        var dashArray = dashLetter.split(" ");

        console.log(dashArray);

        dashArray.splice(n, 1, guessedLetter);

        console.log(dashArray)

        placeLetter(dashArray);

    } else {
        console.log('incorrect')
    }
}

function showLetter(currentItem) {}

var randomNum = Math.floor(Math.random() * wordChoices.length);

var currentWord = wordChoices[randomNum]

var splitWord = currentWord.split('')

console.log(splitWord)

var blank = []
for (i = 0; i < wordChoices[randomNum].length; i++) {
    blank.push('_')
    document.getElementById("guessLine").textContent = blank.join(' ');
}

console.log(currentWord)

function placeLetter(letterArray) {
    document.getElementById("guessLine").textContent = letterArray.join(' ');
}