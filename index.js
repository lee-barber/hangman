    // ####----#### VARIABLES ####----####

    // creates a variable called "wordChoices" assigned to the value of many different words in an array for the game to choose from
    var wordChoices = ["nomad", "indignant", "disparity", "androgynous", "pragmatic", "dilapidated", "putative", "visceral", "extrapolate", "nepotism", "colloquial", "fervently", "auspices", "semantics", "adage", "auspicious", "voila", "culpable", "punitive", "propensity", "abhor", "acumen", "impetus", "dossier", "emphatically", "perseverate", "caveat", "garner", "alchemy", "luddite", "abdicate", "satiate", "nefarious", "insatiable", "percolate", "premonition", "quandary", "aggrieved", "ostensibly", "volition", "impervious", "proclivity", "disillusioned", "tutelage", "innocuous", "indelible", "provocative", "sanctity", "terse", "guise", "auspice", "unabated", "impetuous"]

    // creates a variable called "wordHints" which have indexes that correspond to their matching word
    var wordHints = ["A member of a people that travels from place to place to find fresh pasture for its animals and has no permanent home.", "Feeling or showing anger or annoyance at what is perceived as unfair treatment.", "A great difference.", "Partly male and partly female in appearance; of indeterminate sex.", "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.", "(of a building or object) in a state of disrepair or ruin as a result of age or neglect.", "Generally considered or reputed to be.", "Relating to deep inward feelings rather than to the intellect.", "Extend the application of (a method or conclusion) to an unknown situation by assuming that existing trends will continue or similar methods will be applicable.", "The practice among those with power or influence of favoring relatives or friends, especially by giving them jobs.", "(of language) used in ordinary or familiar conversation; not formal or literary.", "Very enthusiastically or passionately.", "With the help, support, or protection of.", "The branch of linguistics and logic concerned with meaning.", "A proverb or short statement expressing a general truth.", "Conducive to success; favorable.", "There it is; there you are.", "Deserving blame.", "Inflicting or intended as punishment.", "An inclination or natural tendency to behave in a particular way.", "Regard with disgust and hatred.", "The ability to make good judgments and take quick decisions.", "Something that makes a process or activity happen or happen more quickly.", "A collection of documents about a particular person, event, or subject.", "In a forceful way.", "Repeat or prolong an action, thought, or utterance after the stimulus that prompted it has ceased.", "A warning or proviso of specific stipulations, conditions, or limitations.", "Gather or collect (something, especially information or approval)", "A seemingly magical process of transformation, creation, or combination.", "A person opposed to increased industrialization or new technology.", "Fail to fulfill or undertake (a responsibility or duty)", "Supply (someone) with as much as or more of something than is desired or can be managed.", "(typically of an action or activity) wicked or criminal.", "(of an appetite or desire) impossible to satisfy.", "Spread gradually through an area or group of people.", "A strong feeling that something is about to happen, especially something unpleasant.", "A state of perplexity or uncertainty over what to do in a difficult situation.", "Feeling resentment at having been unfairly treated.", "As appears or is stated to be true, though not necessarily so; apparently.", "The faculty or power of using one's will.", "Unable to be affected by (or penetrated)", "A tendency to choose or do something regularly; an inclination or predisposition towards a particular thing.", "Disappointed in someone or something that one discovers to be less good than one had believed.", "Protection of or authority over someone or something; guardianship.", "Not harmful or offensive.", "(of ink or a pen) making marks that cannot be removed. Not able to be forgotten.", "Causing anger or another strong reaction, especially deliberately.", "The state or quality of being holy, sacred, or saintly. Ultimate importance and inviolability.", "Sparing in the use of words; abrupt.", "An external form, appearance, or manner of presentation, typically concealing the true nature of something.", "With the help, support, or protection of.", "Without any reduction in intensity or strength.", "Acting or done quickly and without thought or care."]

    // creates a variable called "alphabet" to create letters from which the user can guess which letters are contained in the game word
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    // uses the native JS method .random to generate a random number between 0-1, then that number is rounded down to the nearest whole number with the native JS method .floor, then that number is multiplied by the length of the variable wordChocies to create a whole number between 0 and the number of words available, then that resulting number is assigned to the variable randomNum
    var randomNum = Math.floor(Math.random() * wordChoices.length);
    // sets the variable currentWord to be assigned to the value of the variable wordChocies at the index of the variable randomNum; in other words, assigns the current word to a random index value contained within the array wordChoices
    var currentWord = wordChoices[randomNum]
    // does the same thing as the variable currentWord except this time the random number being chosen is for the matching word hint that corresponds to the current word
    var currentHint = wordHints[randomNum]
    // uses DOM Manipulation to select the HTML element "hints" and print to that div the string text concatenated and the value of currentHint (the word to be guessed); in other words, shows a box on the screen for the user to read what the hint is for the word they are attempting to guess 
    document.getElementById("hints").innerHTML = "<h1>Hint:</h1> <p>   " + currentHint;
    // uses DOM Manipulation to select the HTML element "lettersContainer" and assign the value of that div to the JS variable lettersLine; this JS variable will be accessed later to use the native JS method .appendChild so that each of the letters can be placed on the screen
    var lettersLine = document.getElementById("lettersContainer")
    // assigns the initial value of the variable attempts to 10; starts the game with the user having 10 chances to guess the word correctly
    var attempts = 10
    // uses DOM Manipulation to target the "chances" HTML element and assigns the value to the JS variable "attempts" concatenated with the string text
    document.getElementById("chances").innerHTML = (attempts) + " attempts remaining";
    // assigns the value of an empty array to the variable "blank" (this is used later in the code to push blank underscores/lines to represent letters that need to be guessed)
    var blank = []


    // ####----#### CONDITIONAL STATEMENTS ####----####


    // creates a for loop that evaluates the code that follows by starting an index at 0 and cycling through the array length of "alphabet" by increasing the interval by 1:
    for (let i = 0; i < alphabet.length; i++) {
        // uses DOM Manipulation to target the HTML element "div" and assign the value to the JS variable "div"
        var div = document.createElement('div');
        // uses DOM Manipulation and the native JS method .createTextNode to assign the value of "letters" to the variable "alphabet" at its current index; creates an empty element for values to be pushed into
        var letters = document.createTextNode(alphabet[i])
        // uses DOM Manipulation and the native JS method .appendChild to push each of the letters that the user can choose from to the div; prints each letter to the screen for the user to see 
        div.appendChild(letters);
        // gives the variable "div" a class of "letterBoxes" so that it can be targeted and styled
        div.classList.add('letterBoxes');
        // assigns the value of the variable button concatenated with the current index to the variable "div.id"
        div.id = "button" + i;
        // uses DOM Manipulation and the native JS method .appendChild to push each of the letters that are chosen to replace the blank lines on the screen; prints each chosen letter to the screen for the user to see 
        lettersLine.appendChild(div);
        // creates a variable called "box" that uses DOM Manipulation to assign the value to the target HTML element "div.id" (this element doesn't actually exist in the HTML document... the element "div" is created with the native JS method .createElement and then that element is further targeted by using a scope value of .id which becomes div.id)
        var box = document.getElementById(div.id);
        // creates an event listener assigned to the variable "box" which on click, executes the following:
        box.addEventListener('click', function() {
            // before using opacity, I was changing the background color of each letter that was clicked on like this:  document.getElementById('button' + i).style.backgroundColor = "#3C3B3F";
            // uses DOM Manipulation to target the element "button" (created in JS above, not in the HTML) and uses the native JS methods .style and .opacity to change the opacity of the div after it's clicked on
            document.getElementById('button' + i).style.opacity = "0.6";
            // runs the function (below) checkWord and passes the alphabet letter at it's current index
            checkWord(alphabet[i])
        })
    }
    // creates a for loop that evaluates the code that follows by starting an index at 0 and cycling through the array length of "wordChoices" at it's current index (randomNum) then adds one:
    for (i = 0; i < wordChoices[randomNum].length; i++) {
        // pushes a blank underscore
        blank.push('__')
        // uses DOM Manipulation and targets the HTML element "guessLine" and uses the native JS method .join to "join" the underscores together with spaces in between; the number of underscores is dependent on which word is selected which is why the for loop is required
        document.getElementById("guessLine").innerHTML = blank.join(' ');
    }


    // ####----#### FUNCTIONS ####----####

    // uses DOM Manipulation to show the HTML element "blank" after the function is called; starts the game with a "blank canvas"
    function show(blank) {
        document.getElementById(blank).style.visibility = "visible";
    }

    // shows the div "blank"
    show("blank");

    // uses DOM Manipulation to hide the HTML element "start" until the function is called below nested inside the function "checkWord"
    function hide(start) {
        document.getElementById(start).style.visibility = "hidden";
    }

    // uses DOM Manipulation to hide the HTML element "base" until the function is called below nested inside the function "checkWord"
    function hide(base) {
        document.getElementById(base).style.visibility = "hidden";
    }

    // hides the div "base"
    hide("base")

    // uses DOM Manipulation to hide the HTML element "pole" until the function is called below nested inside the function "checkWord"
    function hide(pole) {
        document.getElementById(pole).style.visibility = "hidden";
    }

    // hides the div "hide"
    hide("pole")

    // uses DOM Manipulation to hide the HTML element "bar" until the function is called below nested inside the function "checkWord"
    function hide(bar) {
        document.getElementById(bar).style.visibility = "hidden";
    }

    // hides the div "bar"
    hide("bar")

    // uses DOM Manipulation to hide the HTML element "hook" until the function is called below nested inside the function "checkWord"
    function hide(hook) {
        document.getElementById(hook).style.visibility = "hidden";
    }

    // hides the div "hook"
    hide("hook")

    // uses DOM Manipulation to hide the HTML element "head" until the function is called below nested inside the function "checkWord"
    function hide(head) {
        document.getElementById(head).style.visibility = "hidden";
    }

    // hides the div "head"
    hide("head")

    // uses DOM Manipulation to hide the HTML element "torso" until the function is called below nested inside the function "checkWord"
    function hide(torso) {
        document.getElementById(torso).style.visibility = "hidden";
    }

    // hides the div "torso"
    hide("torso")

    // uses DOM Manipulation to hide the HTML element "arm1" until the function is called below nested inside the function "checkWord"
    function hide(arm1) {
        document.getElementById(arm1).style.visibility = "hidden";
    }

    // hides the div "arm1"
    hide("arm1")

    // uses DOM Manipulation to hide the HTML element "arm2" until the function is called below nested inside the function "checkWord"
    function hide(arm2) {
        document.getElementById(arm2).style.visibility = "hidden";
    }

    // hides the div "arm2"
    hide("arm2")

    // uses DOM Manipulation to hide the HTML element "leg1" until the function is called below nested inside the function "checkWord"
    function hide(leg1) {
        document.getElementById(leg1).style.visibility = "hidden";
    }

    // hides the div "leg1"
    hide("leg1")

    // uses DOM Manipulation to hide the HTML element "leg2" until the function is called below nested inside the function "checkWord"
    function hide(leg2) {
        document.getElementById(leg2).style.visibility = "hidden";
    }

    // hides the div "leg2"
    hide("leg2")

    // uses DOM Manipulation to hide the HTML element "dead" until the function is called below nested inside the function "checkWord"
    function hide(dead) {
        document.getElementById(dead).style.visibility = "hidden";
    }

    // hides the div "dead"
    hide("dead")

    // uses DOM Manipulation to hide the HTML element "saved" until the function is called below nested inside the function "checkWord"
    function hide(saved) {
        document.getElementById(saved).style.visibility = "hidden";
    }

    // hides the div "saved"
    hide("saved")

    // creates a function called "checkWord" and passes the argument "guessedLetter"; this is where the code will check if the letter the user guessed matches any of the letters in the word to be guessed 
    function checkWord(guessedLetter) {
        // creates a variable called "bool" and sets it's initial value to "false"; this just creates a starting point of reference 
        bool = false
        // creates a for loop that starts at 0 and cycles through the length of the variable currentWord, increasing the interval by 1
        for (let i = 0; i < currentWord.length; i++) {
            // if the variable "currentWord" at it's current index is equal to the variable "guessedLetter"...; in other words, if the word that the user guessed is the same as one of the letters in the word to be guessed...
            if (currentWord[i] == guessedLetter) {
                // assign the variable "bool" to true
                bool = true
                // assign the variable "blank" at it's current index to the value of guessedLetter
                blank[i] = guessedLetter
                // uses DOM Manipulation to target the HTML element guessLine and assigns the value to the variable "blank" then uses the native JS method .join to "join" the letters separated by a space
                document.getElementById("guessLine").innerHTML = blank.join(' ');
            }
        }
        // However, if the variable "bool" is not true (that is, the letter the user guessed is wrong)...
        if (bool != true) {
            // subtract 1 from the variable "attempts"
            attempts--
            // print to the screen the number of attempts remaining concatenated with the string text
            document.getElementById("chances").innerHTML = attempts + " attempts remaining";

            // if the user's attempts == 10, executes the following:
            if (attempts == 10) {
                // calls the function "show" and passes the argument "base"
                function show(base) {
                    // uses DOM Manipulation to make the div "base" visible
                    document.getElementById(base).style.visibility = "visible";
                }
                // hides the div "blank"
                hide("blank");
                // shows the "base" image which contains an image of the gallows base
                show("base");
            }
            // if the user's attempts == 9, executes the following:
            if (attempts == 9) {
                // calls the function "show" and passes the argument "pole"
                function show(pole) {
                    // uses DOM Manipulation to make the div "pole" visible
                    document.getElementById(pole).style.visibility = "visible";
                }
                // hides the div "blank"
                hide("blank");
                // hides the div "base"
                hide("base");
                // shows the div "pole" which contains an image of the gallows base and pole
                show("pole");
            }
            // if the user's attempts == 8, executes the following:
            if (attempts == 8) {
                // calls the function "show" and passes the argument "bar"
                function show(bar) {
                    // uses DOM Manipulation to make the div "bar" visible
                    document.getElementById(bar).style.visibility = "visible";
                }
                // hides the div "blank"
                hide("blank");
                // hides the div "pole"
                hide("pole");
                // shows the div "bar" which contains an image of the gallows base, pole, and bar
                show("bar");
            }
            // if the user's attempts == 7, executes the following:
            if (attempts == 7) {
                // calls the function "show" and passes the argument "hook"
                function show(hook) {
                    // uses DOM Manipulation to make the div "hook" visible
                    document.getElementById(hook).style.visibility = "visible";
                }
                // hides the div "bar"
                hide("bar");
                // shows the div "hook" which contains an image of the gallows base, pole, bar, and hook
                show("hook");
            }
            // if the user's attempts == 6, executes the following:
            if (attempts == 6) {
                // calls the function "show" and passes the argument "head"
                function show(head) {
                    // uses DOM Manipulation to make the div "head" visible
                    document.getElementById(head).style.visibility = "visible";
                }
                // hides the div "hook"
                hide("hook");
                // shows the div "head"
                show("head");
            }
            // if the user's attempts == 5, executes the following:
            if (attempts == 5) {
                // calls the function "show" and passes the argument "torso"
                function show(torso) {
                    // uses DOM Manipulation to make the div "torso" visible
                    document.getElementById(torso).style.visibility = "visible";
                }
                // hides the div "head"
                hide("head");
                // shows the div "torso" which contains an image of the complete gallows and a stick figure head
                show("torso");
            }
            // if the user's attempts == 4, executes the following:
            if (attempts == 4) {
                // calls the function "show" and passes the argument "arm1"
                function show(arm1) {
                    // uses DOM Manipulation to make the div "arm1" visible
                    document.getElementById(arm1).style.visibility = "visible";
                }
                // hides the div "torso"
                hide("torso");
                // shows the div "arm2" which contains an image of the complete gallows with a stick figure head and one arm
                show("arm1");
            }
            // if the user's attempts == 3, executes the following:
            if (attempts == 3) {
                // calls the function "show" and passes the argument "arm2" 
                function show(arm2) {
                    // uses DOM Manipulation to make the div "arm2" visible
                    document.getElementById(arm2).style.visibility = "visible";
                }
                // hides the div "arm1"
                hide("arm1");
                // shows the div "arm2" which contains an image of the complete gallows with a stick figure head and two arms
                show("arm2");
            }
            // if the user's attempts == 2, executes the following:
            if (attempts == 2) {
                // calls the function "show" and passes the argument "leg1"
                function show(leg1) {
                    // uses DOM Manipulation to make the div "leg1" visible
                    document.getElementById(leg1).style.visibility = "visible";
                }
                // hides the div "arm2"
                hide("arm2");
                // shows the div "leg1" which contains an image of the complete gallows with a stick figure head, two arms, and one leg
                show("leg1");
            }
            // if the user's attempts == 1, executes the following:
            if (attempts == 1) {
                // calls the function "show" and passes the argument "leg2"
                function show(leg2) {
                    // uses DOM Manipulation to make the div "leg2 visible
                    document.getElementById(leg2).style.visibility = "visible";
                }
                // hides the div "leg1"
                hide("leg1");
                // shows the div "leg2" which contains an image of the complete gallows with a stick figure head, two arms, and two legs
                show("leg2");
            }
            // if the user's attempts == 0, executes the following:
            if (attempts == 0) {
                // calls the function "show" and passes the argument "dead"
                function show(dead) {
                    // uses DOM Manipulation to make the div "dead" visible
                    document.getElementById(dead).style.visibility = "visible";
                }
                // hides the div "leg2"
                hide("leg2");
                //  // shows the div "dead" which contains an image of the complete gallows with a stick figure head, two arms, two legs, and x-ed out eyes (end of game)
                show("dead");
            }
        }
        // OR... if "currentWord" == blank.join; if the word to be guessed equals what the "joined" letters that the player guessed...
        if (currentWord == blank.join('')) {
            // calls the function "show" and passes the argument "saved"
            function show(saved) {
                // uses DOM Manipulation to make the div "saved" visible
                document.getElementById(saved).style.visibility = "visible";
            }
            // shows the div "saved" which shows an image of a stick figure man and a smiley face
            show("saved");
            // sets a timeout alert 
            setTimeout(function() {
                // alerts the user that they won (pop-up box) with a string of text concatenated with the current word that is transformed to upper case letters with the native JS method .toUpperCase
                alert("Nice job!  You won!\n\nThe word was: " + currentWord.toUpperCase())
                // reloads the current page after 500 milliseconds
                location.reload();
            }, 500);
            // OR... if the player lost (attempts == 0)
        } else if (attempts == 0) {
            // sets a timeout alert
            setTimeout(function() {
                // alerts the user that they lost (pop-up box) with a string of text concatenated with the current word that is transformed to upper case letters with the native JS method .toUpperCase
                alert("Sorry, you lost.\n\nThe word was: " + currentWord.toUpperCase())
                // reloads the current page after 500 milliseconds
                location.reload()
            }, 500);
        }
    }