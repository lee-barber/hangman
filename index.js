    var wordChoices = ["nomad", "indignant", "disparity", "androgynous", "pragmatic", "dilapidated", "putative", "visceral", "extrapolate", "nepotism", "colloquial", "fervently", "auspices", "semantics", "adage", "auspicious", "voila", "culpable", "punitive", "propensity", "abhor", "acumen", "impetus", "dossier", "emphatically", "perseverate", "caveat", "garner", "alchemy", "luddite", "abdicate", "satiate", "nefarious", "insatiable", "percolate", "premonition", "quandary", "aggrieved", "ostensibly", "volition", "impervious", "proclivity", "disillusioned", "tutelage", "innocuous", "indelible", "provocative", "sanctity", "terse", "guise", "auspice", "unabated", "impetuous"]

    var wordHints = ["A member of a people that travels from place to place to find fresh pasture for its animals and has no permanent home.", "Feeling or showing anger or annoyance at what is perceived as unfair treatment.", "A great difference.", "Partly male and partly female in appearance; of indeterminate sex.", "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.", "(of a building or object) in a state of disrepair or ruin as a result of age or neglect.", "Generally considered or reputed to be.", "Relating to deep inward feelings rather than to the intellect.", "Extend the application of (a method or conclusion) to an unknown situation by assuming that existing trends will continue or similar methods will be applicable.", "The practice among those with power or influence of favouring relatives or friends, especially by giving them jobs.", "(of language) used in ordinary or familiar conversation; not formal or literary.", "Very enthusiastically or passionately.", "With the help, support, or protection of.", "The branch of linguistics and logic concerned with meaning.", "A proverb or short statement expressing a general truth.", "Conducive to success; favourable.", "There it is; there you are.", "Deserving blame.", "Inflicting or intended as punishment.", "An inclination or natural tendency to behave in a particular way.", "Regard with disgust and hatred.", "The ability to make good judgements and take quick decisions.", "Something that makes a process or activity happen or happen more quickly.", "A collection of documents about a particular person, event, or subject.", "In a forceful way.", "Repeat or prolong an action, thought, or utterance after the stimulus that prompted it has ceased.", "A warning or proviso of specific stipulations, conditions, or limitations.", "Gather or collect (something, especially information or approval)", "A seemingly magical process of transformation, creation, or combination.", "A person opposed to increased industrialization or new technology.", "Fail to fulfil or undertake (a responsibility or duty)", "Supply (someone) with as much as or more of something than is desired or can be managed.", "(typically of an action or activity) wicked or criminal.", "(of an appetite or desire) impossible to satisfy.", "Spread gradually through an area or group of people.", "A strong feeling that something is about to happen, especially something unpleasant.", "A state of perplexity or uncertainty over what to do in a difficult situation.", "Feeling resentment at having been unfairly treated.", "As appears or is stated to be true, though not necessarily so; apparently.", "The faculty or power of using one's will.", "Unable to be affected by (or penetrated)", "A tendency to choose or do something regularly; an inclination or predisposition towards a particular thing.", "Disappointed in someone or something that one discovers to be less good than one had believed.", "Protection of or authority over someone or something; guardianship.", "Not harmful or offensive.", "(of ink or a pen) making marks that cannot be removed. Not able to be forgotten.", "Causing anger or another strong reaction, especially deliberately.", "The state or quality of being holy, sacred, or saintly. Ultimate importance and inviolability.", "Sparing in the use of words; abrupt.", "An external form, appearance, or manner of presentation, typically concealing the true nature of something.", "With the help, support, or protection of.", "Without any reduction in intensity or strength.", "Acting or done quickly and without thought or care."]

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    var randomNum = Math.floor(Math.random() * wordChoices.length);
    var currentWord = wordChoices[randomNum]
    var currentHint = wordHints[randomNum]
    document.getElementById("hints").innerHTML = "<h1>Hint:</h1> <p>   " + currentHint;
    var lettersLine = document.getElementById("lettersContainer")
    var attempts = 10
    document.getElementById("chances").innerHTML = (attempts) + " attempts remaining";
    var blank = []

    for (let i = 0; i < alphabet.length; i++) {
        var div = document.createElement('div');
        var letters = document.createTextNode(alphabet[i])
        div.appendChild(letters);
        div.classList.add('letterBoxes');
        div.id = "button" + i;
        lettersLine.appendChild(div);
        var box = document.getElementById(div.id);
        box.addEventListener('click', function() {
            // document.getElementById('button' + i).style.backgroundColor = "#3C3B3F";
            document.getElementById('button' + i).style.opacity = "0.6";
            checkWord(alphabet[i])
        })
    }
    // console.log(currentWord)
    for (i = 0; i < wordChoices[randomNum].length; i++) {
        blank.push('__')
        document.getElementById("guessLine").innerHTML = blank.join(' ');
    }

    function show(blank) {
        document.getElementById(blank).style.visibility = "visible";
    }

    show("blank");

    function hide(start) {
        document.getElementById(start).style.visibility = "hidden";
    }

    function hide(base) {
        document.getElementById(base).style.visibility = "hidden";
    }

    hide("base")

    function hide(pole) {
        document.getElementById(pole).style.visibility = "hidden";
    }

    hide("pole")

    function hide(bar) {
        document.getElementById(bar).style.visibility = "hidden";
    }

    hide("bar")

    function hide(hook) {
        document.getElementById(hook).style.visibility = "hidden";
    }

    hide("hook")

    function hide(head) {
        document.getElementById(head).style.visibility = "hidden";
    }

    hide("head")

    function hide(torso) {
        document.getElementById(torso).style.visibility = "hidden";
    }

    hide("torso")

    function hide(arm1) {
        document.getElementById(arm1).style.visibility = "hidden";
    }

    hide("arm1")

    function hide(arm2) {
        document.getElementById(arm2).style.visibility = "hidden";
    }

    hide("arm2")

    function hide(leg1) {
        document.getElementById(leg1).style.visibility = "hidden";
    }

    hide("leg1")

    function hide(leg2) {
        document.getElementById(leg2).style.visibility = "hidden";
    }

    hide("leg2")

    function hide(dead) {
        document.getElementById(dead).style.visibility = "hidden";
    }

    hide("dead")

    function hide(saved) {
        document.getElementById(saved).style.visibility = "hidden";
    }

    hide("saved")

    function checkWord(guessedLetter) {
        bool = false
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] == guessedLetter) {
                bool = true
                blank[i] = guessedLetter
                document.getElementById("guessLine").innerHTML = blank.join(' ');
            }
        }
        if (bool != true) {
            attempts--
            document.getElementById("chances").innerHTML = attempts + " attempts remaining";
            if (attempts == 10) {
                function show(base) {
                    document.getElementById(base).style.visibility = "visible";
                }
                hide("blank");
                show("base");
                console.log("Draw a base!")
            }
            if (attempts == 9) {
                function show(pole) {
                    document.getElementById(pole).style.visibility = "visible";
                }
                hide("blank");
                hide("base");
                show("pole");
                console.log("Draw a pole!")
            }
            if (attempts == 8) {
                function show(bar) {
                    document.getElementById(bar).style.visibility = "visible";
                }
                hide("blank");
                hide("pole");
                show("bar");
                console.log("Draw a bar")
            }
            if (attempts == 7) {
                function show(hook) {
                    document.getElementById(hook).style.visibility = "visible";
                }
                hide("bar");
                show("hook");
                console.log("Draw a hook!")
            }
            if (attempts == 6) {
                function show(head) {
                    document.getElementById(head).style.visibility = "visible";
                }
                hide("hook");
                show("head");
                console.log("Draw a head!")
            }
            if (attempts == 5) {
                function show(torso) {
                    document.getElementById(torso).style.visibility = "visible";
                }
                hide("head");
                show("torso");
                console.log("Draw a torso!")
            }
            if (attempts == 4) {
                function show(arm1) {
                    document.getElementById(arm1).style.visibility = "visible";
                }
                hide("torso");
                show("arm1");
                console.log("Draw arm 1!")
            }
            if (attempts == 3) {
                function show(arm2) {
                    document.getElementById(arm2).style.visibility = "visible";
                }
                hide("arm1");
                show("arm2");
                console.log("Draw arm 2!")
            }
            if (attempts == 2) {
                function show(leg1) {
                    document.getElementById(leg1).style.visibility = "visible";
                }
                hide("arm2");
                show("leg1");
                console.log("Draw leg 1!")
            }
            if (attempts == 1) {
                function show(leg2) {
                    document.getElementById(leg2).style.visibility = "visible";
                }
                hide("leg1");
                show("leg2");
                console.log("Draw leg 2!")
            }
            if (attempts == 0) {
                function show(dead) {
                    document.getElementById(dead).style.visibility = "visible";
                }
                hide("leg2");
                show("dead");
                console.log("Draw a dead man!")
            }
        }
        if (currentWord == blank.join('')) {
            function show(saved) {
                document.getElementById(saved).style.visibility = "visible";
            }
            // hide(["base", "pole", "bar", "hook", "head", "torso", "arm1", "arm2", "leg1", "leg2", "dead"])
            show("saved");
            setTimeout(function() {
                alert("Nice job!  You won!\n\nThe word was: " + currentWord.toUpperCase())

                console.log("You saved me!!")
                location.reload();
            }, 500);
        } else if (attempts == 0) {

            setTimeout(function() {
                alert("Sorry, you lost.\n\nThe word was: " + currentWord.toUpperCase())
                location.reload()
            }, 500);

        }
    }