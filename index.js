// variable that contains an array of the game words to choose from 
var wordChoices = ["nomad", "indignant", "disparity", "androgynous", "pragmatic", "dilapidated", "putative", "visceral", "extrapolate", "nepotism", "colloquial", "fervently", "auspices", "semantics", "adage", "auspicious", "voila", "culpable", "punitive", "propensity", "abhor", "acumen", "impetus", "dossier", "emphatically", "perseverate", "caveat", "garner", "alchemy", "luddite", "abdicate", "satiate", "nefarious", "insatiable", "percolate", "premonition", "quandary", "aggrieved", "ostensibly", "volition", "impervious", "proclivity", "disillusioned", "tutelage", "innocuous", "indelible", "provocative", "sanctity", "terse", "guise", "auspice", "unabated", "impetuous"]

// hints for each word
var wordHints = ["A member of a people that travels from place to place to find fresh pasture for its animals and has no permanent home.", "Feeling or showing anger or annoyance at what is perceived as unfair treatment.", "A great difference.", "Partly male and partly female in appearance; of indeterminate sex.", "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.", "(of a building or object) in a state of disrepair or ruin as a result of age or neglect.", "Generally considered or reputed to be.", "Relating to deep inward feelings rather than to the intellect.", "Extend the application of (a method or conclusion) to an unknown situation by assuming that existing trends will continue or similar methods will be applicable.", "The practice among those with power or influence of favouring relatives or friends, especially by giving them jobs.", "(of language) used in ordinary or familiar conversation; not formal or literary.", "Very enthusiastically or passionately.", "With the help, support, or protection of.", "The branch of linguistics and logic concerned with meaning.", "A proverb or short statement expressing a general truth.", "Conducive to success; favourable.", "There it is; there you are.", "Deserving blame.", "Inflicting or intended as punishment.", "An inclination or natural tendency to behave in a particular way.", "Regard with disgust and hatred.", "The ability to make good judgements and take quick decisions.", "Something that makes a process or activity happen or happen more quickly.", "A collection of documents about a particular person, event, or subject.", "In a forceful way.", "Repeat or prolong an action, thought, or utterance after the stimulus that prompted it has ceased.", "A warning or proviso of specific stipulations, conditions, or limitations.", "Gather or collect (something, especially information or approval)", "A seemingly magical process of transformation, creation, or combination.", "A person opposed to increased industrialization or new technology.", "Fail to fulfil or undertake (a responsibility or duty)", "Supply (someone) with as much as or more of something than is desired or can be managed.", "(typically of an action or activity) wicked or criminal.", "(of an appetite or desire) impossible to satisfy.", "Spread gradually through an area or group of people.", "A strong feeling that something is about to happen, especially something unpleasant.", "A state of perplexity or uncertainty over what to do in a difficult situation.", "Feeling resentment at having been unfairly treated.", "As appears or is stated to be true, though not necessarily so; apparently.", "The faculty or power of using one's will.", "Unable to be affected by (or penetrated)", "A tendency to choose or do something regularly; an inclination or predisposition towards a particular thing.", "Disappointed in someone or something that one discovers to be less good than one had believed.", "Protection of or authority over someone or something; guardianship.", "Not harmful or offensive.", "(of ink or a pen) making marks that cannot be removed. Not able to be forgotten.", "Causing anger or another strong reaction, especially deliberately.", "The state or quality of being holy, sacred, or saintly. Ultimate importance and inviolability.", "Sparing in the use of words; abrupt.", "An external form, appearance, or manner of presentation, typically concealing the true nature of something.", "With the help, support, or protection of.", "Without any reduction in intensity or strength.", "Acting or done quickly and without thought or care."]

// array of each letter in the alphabet to choose from
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// number of chances remaining displayed to the user
// document.getElementById("chances").innerHTML = attempts;

// creates a random number to choose a random index from the "wordChoices" array
var randomNum = Math.floor(Math.random() * wordChoices.length);

// assigns the current word to the value of the current word at the random index number 
var currentWord = wordChoices[randomNum]

// assigns the current word to the value of the current word at the random index number 
var currentHint = wordHints[randomNum]

// prints the hint for the word to be guessed
document.getElementById("hints").innerHTML = "<h1>Hint:</h1> <p>   " + currentHint;

// attempts remaining = 6
var attempts = 6
// document.getElementById("chances").innerHTML = (attempts);
document.getElementById("chances").innerHTML = (attempts) + " attempts remaining";

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

// document.getElementById('letterBox').style.margin = 0 auto; ?????

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
        document.getElementById("chances").innerHTML = attempts + " attempts remaining";
    }
    if (currentWord == blank.join('')) {
        alert('Nice job!  You won!  :)')
    } else if (attempts == 0) {
        alert("Sorry, you lost.  :(\n\nThe word was: " + currentWord.toUpperCase())
        location.reload()
    }
}

console.log(currentWord)
console.log(currentHint)