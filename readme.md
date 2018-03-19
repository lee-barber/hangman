![screenshot](https://github.com/lee-barber/hangman/blob/master/img/hangman.gif)

# Hangman

v0.1.2

This is a traditional "hangman" game in which you must try to guess the letters of a word before all of your allotted attempts are depleted.  Each wrong guess shall result in a line of the gallows or stick figure limbs being drawn.  If you fail to guess the word correctly, the stick figure person meets their  demise.  If you guess the word correctly, the stick figure person goes home to their family.  All of the words to be guessed were carefully curated by a humanities graduate from Penn State.  Good Luck!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1. You will need a modern web browser that can render HTML documents (e.g. Google Chrome).

2. Download and unzip the Hangman file to your system.

### Installing

This is a stand-alone web application that does not need to be installed. It will run locally on your computer upon executing the "index.html" file.

### Pseudocode

```
# Rules
10 initial attempts to guess word correctly
Player wins if he/she guesses word before 10 attemps are used
Player loses when attempts == 0

# Definitions
array of words = wordbank
array of letters = alphabet
attempts remaining = 10

# Functionality
Game starts upon page load

# Display
Rules
Blank spaces
Alphabet
Number of attempts

As long as (attempts > 0){
Game is live...
	Display to user: "Guess a letter"
	User guesses letter by clicking letter in displayed alphabet
	if (letter exists word){
		for each instance of that letter in word{
			change blank space to guessed letter
			mark letter as used in the alphabet and make it unclickable
		}
	}
	elseif (letter does NOT exist in word){
			mark letter as used in the alphabet and make it unclickable
			deduct 1 from number of attempts remaining
	}
	
	if (guessed word == current word from wordbank){
		Stop program / exit loop
		Display "Game is over. You win."
		Display exit options
	}
}
Otherwise{
	Stop program / exit loop
	Display "Game is over. You lose."
	Display exit options
}

```

## Known Issues

No known issues at this time

## Testing

Did you break it?  Please [contact me](mailto:lfb11@alumni.psu.edu) and let me know what functionality is not working properly so that I can fix the code.

## Built With

* [HTML](https://developers.google.com/web) - The web framework used
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Cascading Style Sheets
* [Sass](https://sass-lang.com) - Syntactically Awesome Style Sheets
* [JavaScript](https://www.javascript.com) - The core functionality and logic

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/lee-barber/Hangman/tags). 

## Authors

* **[Lee Barber](https://www.linkedin.com/in/lfb11)** - *Conception and Creation*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tips to [Ognian Danailov](https://www.linkedin.com/in/oggidanailov) and [Jeremy Leitmeyer](https://www.linkedin.com/in/jleitmeyer) for teaching me the fundamentals of this project
* Much gratitude to [Zack Enders](https://github.com/ZackEnders) for the ham sandwich and helping me through the coding rough spots
* My thanks to [Clayton Wert](https://www.linkedin.com/in/clayton-wert) and [Tony Stultz](https://www.linkedin.com/in/anthony-stultz-7861156/) for moral support and guidance during the periods of self-doubt
* All of my love to my greatest motivation and inspiration, my two wonderful children, Mayson and Anna
