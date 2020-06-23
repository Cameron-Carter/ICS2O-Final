// JavaScript File
// let statements
let myGuess;
const words = ["cow", "fog", "cab", "gas", "cup", "bed", "pen", "act", "spy", "sky", "ink", "hug", "end", "can", "sub", "bus", "pet", "why", "old", "den", "hour", "left", "when", "play", "skip", "draw", "sink", "ally", "grow", "cast", "mint", "lava", "path", "yard", "envy", "edit", "boil", "wand", "wave", "flea", "scar", "towel", "pizza", "sheep", "think", "trunk", "print", "bands", "cards", "spoon", "crisp", "green", "board", "brave", "storm", "grape", "flame", "level", "blend", "spree", "trees", "blood", "galaxy", "oxygen", "defend", "rhythm", "zodiac", "casual", "sunset", "castle", "zombie", "phlegm", "hunter", "tragic", "island", "wrench", "charge", "menace", "reveal", "review", "unwind", "unveil", "discard", "prowess", "villain", "carrots", "glasses", "surface", "folding", "subject", "rhythms", "ranking", "contest", "sheilds", "archery", "creator", "plastic", "cryptic", "passage", "quickly", "reverse", "weather", "scorpion", "powerful", "cupboard", "blizzard", "abruptly", "strength", "triangle", "twelfths", "interval", "fishhook", "dumbbell", "airplane", "youthful", "bagpipes", "knuckles", "unworthy", "whizzing", "momentum", "quizzing", "zucchini"];
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
  myGuess = document.getElementById("input").value;
  rightGuess = 0;
  // if there is no input, the user is told to type in a letter
  if (myGuess.length !== 1) {
    alert("Please enter a valid letter.");
  }
  else {
  //loops through the word starting from the beginning, then from the second letter, so on so forth until it has been looped through starting from each letter
  for (let i = 0; i < randomWord.length; i++) {
    // sets value of letterIndex to to position of the guessed letter in the word (-1 if not found)
    letterIndex = randomWord.indexOf(myGuess, i);
    // if the letter was found to be in the word, the right guess count increments
    if (letterIndex > -1) {
      rightGuess++;
    }
    // sets value of letterOutput to the letter in the previously found position of the hidden word
    letterOutput = randomWord.substring(letterIndex, letterIndex + 1);
    
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
  //
    }
    //
    if (rightGuess == 0) {
      mistakes++;
    }
    //
    if (mistakes == 1) {
      document.getElementById("hangman").style.display="block";
      if (guessWithOneMistake == false) {
        mistakeOne = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne;
      }
      guessWithOneMistake = true;
    }
    //
    else if (mistakes == 2) {
      document.getElementById("hangman").style.display="none";
      document.getElementById("hangman2").style.display="block";
      if (guessWithTwoMistakes == false) {
        mistakeTwo = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo;
      }
      guessWithTwoMistakes = true;
    }
    //
    else if (mistakes == 3) {
      document.getElementById("hangman2").style.display="none";
      document.getElementById("hangman3").style.display="block";
      if (guessWithThreeMistakes == false) {
        mistakeThree = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo + ", " + mistakeThree;
      }
      guessWithThreeMistakes = true;
    }
    //
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
    //
    else if (mistakes == 6) {
      document.getElementById("hangman5").style.display="none";
      document.getElementById("hangman6").style.display="block";
      if (guessWithSixMistakes == false) {
        mistakeSix = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo + ", " + mistakeThree + ", " + mistakeFour + ", " + mistakeFive + ", " + mistakeSix;
      }
      guessWithSixMistakes = true;
    }
    //
    else if (mistakes == 7) {
      document.getElementById("hangman6").style.display="none";
      document.getElementById("hangman7").style.display="block";
      if (guessWithSevenMistakes == false) {
        mistakeSeven = myGuess;
        document.getElementById("letterlist").innerHTML = mistakeOne + ", " + mistakeTwo + ", " + mistakeThree + ", " + mistakeFour + " ," + mistakeFive + ", " + mistakeSix, " ," + mistakeSeven;
      }
      guessWithSevenMistakes = true;
      alert("You lose! The word was " + randomWord + "! Feel free to try a new game with a new word.");
      
    }
      //}
  
  //alert(lettersGuessed);
  
  
  if ((randomWord.length == 3) && (document.getElementById("l1").innerHTML.length == 1) && (document.getElementById("l2").innerHTML.length == 1) && (document.getElementById("l3").innerHTML.length == 1)) {
    alert("You win! Try a new game with a brand new random word if you'd like.");
  }
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
// event listener for new game button that reloads page
//document.getElementById("btn2").addEventListener("click", reload);
//
window.addEventListener("load", underscores);