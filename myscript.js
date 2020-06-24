// JavaScript File
// let statements
let myGuess;
// array of possible words to be randomly selected
const words = [
  "cow", "fog", "cab", "gas", "cup", "bed", "pen", "act", "spy", "sky", "ink", "hug", "end", "can", "sub", "bus", "pet", "why", "old", "den",
  "hour", "left", "when", "play", "skip", "draw", "sink", "ally", "grow", "cast", "mint", "lava", "path", "yard", "envy", "edit", "boil", "wand", "wave", "flea", "scar",
  "towel", "pizza", "sheep", "think", "trunk", "print", "bands", "cards", "spoon", "crisp", "green", "board", "brave", "storm", "grape", "flame", "level", "blend", "spree", "trees", "blood",
  "galaxy", "oxygen", "defend", "rhythm", "zodiac", "casual", "sunset", "castle", "zombie", "phlegm", "hunter", "tragic", "island", "wrench", "charge", "menace", "reveal", "review", "unwind", "unveil",
  "discard", "prowess", "villain", "carrots", "glasses", "surface", "folding", "subject", "rhythms", "ranking", "contest", "sheilds", "archery", "creator", "plastic", "cryptic", "passage", "quickly", "reverse", "whisper",
  "scorpion", "powerful", "cupboard", "blizzard", "abruptly", "strength", "triangle", "twelfths", "interval", "fishhook", "dumbbell", "airplane", "youthful", "bagpipes", "knuckles", "unworthy", "whizzing", "momentum", "quizzing", "zucchini",
  "pneumonia", "xylophone", "beekeeper", "microwave",
  "jawbreaker", "wristwatch", "university", "sleeveless", "fulfilling", "stronghold"
  ];
// picks a random word from the words array
const randomWord = words[Math.floor(Math.random() * words.length)];
let letterIndex;
let letterOutput;
let mistakes = 0;
let rightGuess;
let mistakeOne;
let mistakeTwo;
let mistakeThree;
let mistakeFour;
let mistakeFive;
let mistakeSix;
let mistakeSeven;
let guessWithOneMistake = false;
let guessWithTwoMistakes = false;
let guessWithThreeMistakes = false;
let guessWithFourMistakes = false;
let guessWithFiveMistakes = false;
let guessWithSixMistakes = false;
let guessWithSevenMistakes = false;

// function that evaluates the input
function guess() {
  // sets value of myGuess variable to the input letter
  myGuess = document.getElementById("input").value.toLowerCase();
  rightGuess = 0;
  // if there is not an input of one character, the user is told to type in a valid letter
  if (myGuess.length !== 1) {
    alert("Please enter a valid letter.");
  }
  // otherwise, the input is considered valid and goes through some examination
  else {
    //loops through the word starting from the beginning, then from the second letter, so on so forth until it has been looped through starting from each letter
    for (let i = 0; i < randomWord.length; i++) {
      // sets value of letterIndex to to position of the guessed letter in the word (-1 if not found)
      letterIndex = randomWord.indexOf(myGuess, i);
      // if the letter was found to be in the word, the right guess count increments
      if (letterIndex > -1) {
        rightGuess++;
      }
      // sets value of letterOutput to the letter in the previously found position (index) in the hidden word
      letterOutput = randomWord.substring(letterIndex, letterIndex + 1);
      // depending on where in the word the input belongs, different p tags will display the input
      if (letterIndex == 0) {
        document.getElementById("l1").innerHTML = letterOutput;
      }
      else if (letterIndex == 1) {
        document.getElementById("l2").innerHTML = letterOutput;
      }
      else if (letterIndex == 2) {
        document.getElementById("l3").innerHTML = letterOutput;
      }
      else if (letterIndex == 3) {
        document.getElementById("l4").innerHTML = letterOutput;
      }
      else if (letterIndex == 4) {
        document.getElementById("l5").innerHTML = letterOutput;
      }
      else if (letterIndex == 5) {
        document.getElementById("l6").innerHTML = letterOutput;
      }
      else if (letterIndex == 6) {
        document.getElementById("l7").innerHTML = letterOutput;
      }
      else if (letterIndex == 7) {
        document.getElementById("l8").innerHTML = letterOutput;
      }
      else if (letterIndex == 8) {
        document.getElementById("l9").innerHTML = letterOutput;
      }
      else if (letterIndex == 9) {
        document.getElementById("l10").innerHTML = letterOutput;
      }
    }
    // if the input was not right, the mistakes counter increments by one
    if (rightGuess == 0) {
      mistakes++;
    }
    // if the mistake counter is at 1, the desired hangman image is displayed
    if (mistakes == 1) {
      document.getElementById("hangman").style.display="block";
      // as long as it is the first guess with the mistake count at 1, the "wrong guesses list" adds the latest guess
      if (guessWithOneMistake == false) {
        mistakeOne = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne;
      }
      guessWithOneMistake = true;
    }
    // the same process is repeated for each number of mistakes, but with different images, and more letters being added to the list
    else if (mistakes == 2) {
      document.getElementById("hangman").style.display="none";
      document.getElementById("hangman2").style.display="block";
      if (guessWithTwoMistakes == false) {
        mistakeTwo = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo;
      }
      guessWithTwoMistakes = true;
    }
    else if (mistakes == 3) {
      document.getElementById("hangman2").style.display="none";
      document.getElementById("hangman3").style.display="block";
      if (guessWithThreeMistakes == false) {
        mistakeThree = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo + ", " + mistakeThree;
      }
      guessWithThreeMistakes = true;
    }
    else if (mistakes == 4) {
      document.getElementById("hangman3").style.display="none";
      document.getElementById("hangman4").style.display="block";
      if (guessWithFourMistakes == false) {
        mistakeFour = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo + ", " + mistakeThree + ", " + mistakeFour;
      }
      guessWithFourMistakes = true;
    }
    else if (mistakes == 5) {
      document.getElementById("hangman4").style.display="none";
      document.getElementById("hangman5").style.display="block";
      if (guessWithFiveMistakes == false) {
        mistakeFive = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo + ", " + mistakeThree + ", " + mistakeFour + ", " + mistakeFive;
      }
      guessWithFiveMistakes = true;
    }
    else if (mistakes == 6) {
      document.getElementById("hangman5").style.display="none";
      document.getElementById("hangman6").style.display="block";
      if (guessWithSixMistakes == false) {
        mistakeSix = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo + ", " + mistakeThree + ", " + mistakeFour + ", " + mistakeFive + ", " + mistakeSix;
      }
      guessWithSixMistakes = true;
    }
    // if the user reaches 7 guesses, the normal process takes place for a wrong guess, but the user also gets an alert saying that they lose and telling them the answer
    else if (mistakes == 7) {
      document.getElementById("hangman6").style.display="none";
      document.getElementById("hangman7").style.display="block";
      if (guessWithSevenMistakes == false) {
        mistakeSeven = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo + ", " + mistakeThree + ", " + mistakeFour + " ," + mistakeFive + ", " + mistakeSix, ", " + mistakeSeven;
      }
      guessWithSevenMistakes = true;
      alert("You lose! The word was " + randomWord + "! Feel free to try a new game with a new word.");
    }
    // if all the letters of the word are displayed (meaning they have been guessed), the user is informed by an alert that they have won
    if ((randomWord.length == 3) && (document.getElementById("l1").innerHTML.length == 1) && (document.getElementById("l2").innerHTML.length == 1) && (document.getElementById("l3").innerHTML.length == 1)) {
      alert("You win! Try a new game with a brand new random word if you'd like.");
    }
    // repeated for each length of word
    else if ((randomWord.length == 4) && (document.getElementById("l1").innerHTML.length == 1) && (document.getElementById("l2").innerHTML.length == 1) && (document.getElementById("l3").innerHTML.length == 1) && (document.getElementById("l4").innerHTML.length == 1)) {
      alert("You win! Try a new game with a brand new random word if you'd like.");
    }
    else if ((randomWord.length == 5) && (document.getElementById("l1").innerHTML.length == 1) && (document.getElementById("l2").innerHTML.length == 1) && (document.getElementById("l3").innerHTML.length == 1) && (document.getElementById("l4").innerHTML.length == 1) && (document.getElementById("l5").innerHTML.length == 1)) {
      alert("You win! Try a new game with a brand new random word if you'd like.");
    }
    else if ((randomWord.length == 6) && (document.getElementById("l1").innerHTML.length == 1) && (document.getElementById("l2").innerHTML.length == 1) && (document.getElementById("l3").innerHTML.length == 1) && (document.getElementById("l4").innerHTML.length == 1) && (document.getElementById("l5").innerHTML.length == 1) && (document.getElementById("l6").innerHTML.length == 1)) {
      alert("You win! Try a new game with a brand new random word if you'd like.");
    }
    else if ((randomWord.length == 7) && (document.getElementById("l1").innerHTML.length == 1) && (document.getElementById("l2").innerHTML.length == 1) && (document.getElementById("l3").innerHTML.length == 1) && (document.getElementById("l4").innerHTML.length == 1) && (document.getElementById("l5").innerHTML.length == 1) && (document.getElementById("l6").innerHTML.length == 1) && (document.getElementById("l7").innerHTML.length == 1)) {
      alert("You win! Try a new game with a brand new random word if you'd like.");
    }
    else if ((randomWord.length == 8) && (document.getElementById("l1").innerHTML.length == 1) && (document.getElementById("l2").innerHTML.length == 1) && (document.getElementById("l3").innerHTML.length == 1) && (document.getElementById("l4").innerHTML.length == 1) && (document.getElementById("l5").innerHTML.length == 1) && (document.getElementById("l6").innerHTML.length == 1) && (document.getElementById("l7").innerHTML.length == 1) && (document.getElementById("l8").innerHTML.length == 1)) {
      alert("You win! Try a new game with a brand new random word if you'd like.");
    }
    else if ((randomWord.length == 9) && (document.getElementById("l1").innerHTML.length == 1) && (document.getElementById("l2").innerHTML.length == 1) && (document.getElementById("l3").innerHTML.length == 1) && (document.getElementById("l4").innerHTML.length == 1) && (document.getElementById("l5").innerHTML.length == 1) && (document.getElementById("l6").innerHTML.length == 1) && (document.getElementById("l7").innerHTML.length == 1) && (document.getElementById("l8").innerHTML.length == 1) && (document.getElementById("l9").innerHTML.length == 1)) {
      alert("You win! Try a new game with a brand new random word if you'd like.");
    }
    else if ((randomWord.length == 10) && (document.getElementById("l1").innerHTML.length == 1) && (document.getElementById("l2").innerHTML.length == 1) && (document.getElementById("l3").innerHTML.length == 1) && (document.getElementById("l4").innerHTML.length == 1) && (document.getElementById("l5").innerHTML.length == 1) && (document.getElementById("l6").innerHTML.length == 1) && (document.getElementById("l7").innerHTML.length == 1) && (document.getElementById("l8").innerHTML.length == 1) && (document.getElementById("l9").innerHTML.length == 1) && (document.getElementById("l10").innerHTML.length == 1)){
      alert("You win! Try a new game with a brand new random word if you'd like.");
    }
    // clears the text box after guesses
    document.getElementById("input").value = null;
  }
}
// function to change how many underscores are displayed based on letter count in word
function underscores() {
  if (randomWord.length == 3) {
    document.getElementById("h3").innerHTML = "_ _ _";
  }
  else if (randomWord.length == 4) {
    document.getElementById("h3").innerHTML = "_ _ _ _";
  }
  else if (randomWord.length == 5) {
    document.getElementById("h3").innerHTML = "_ _ _ _ _";
  }
  else if (randomWord.length == 6) {
    document.getElementById("h3").innerHTML = "_ _ _ _ _ _";
  }
  else if (randomWord.length == 7) {
    document.getElementById("h3").innerHTML = "_ _ _ _ _ _ _";
  }
  else if (randomWord.length == 8) {
    document.getElementById("h3").innerHTML = "_ _ _ _ _ _ _ _";
  }
  else if (randomWord.length == 9) {
    document.getElementById("h3").innerHTML = "_ _ _ _ _ _ _ _ _";
  }
  else if (randomWord.length == 10) {
    document.getElementById("h3").innerHTML = "_ _ _ _ _ _ _ _ _ _";
  }
}
// event listener that triggers the guess function when the button is pressed
document.getElementById("btn1").addEventListener("click", guess);
// event listener that triggers the underscores function when the page loads
window.addEventListener("load", underscores);
// when a key is pressed when in form, a function starts to prevent the enter button from reloading the page and ruining absolutely everything
document.getElementById("form").onkeypress = function(enter) {
  // js has keycodes for each button, with 13 being the one for enter, so when the key is 13, the default outcome of reloading the page and breaking the game does not take place
  let key = enter.charCode || enter.keycode || 0;
  if (key == 13) {
    enter.preventDefault();
  }
};