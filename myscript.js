// JavaScript File
// let statements
let myGuess;
let letterOne;
const letterTwo = document.getElementById("l2").value;
const letterThree = document.getElementById("l3").value;
const letterFour = document.getElementById("l4").value;
const letterFive = document.getElementById("l5").value;
const words = ["pizza", "towel"];
const randomWord = words[Math.floor(Math.random() * words.length)];
let wrongGuessList = document.getElementById("letterlist").value;
let letterIndex;
let letterOutput;
const maxMistakes = 7;
let mistakes = 0;
let rightGuess;
let wrongGuess;
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

//
  //function startGame() {
    
  //}
// function that allows program to reload
//function reload() {
  // reloads window
  //window.reload;
  //alert("new");
//}
// function that evaluates the input
function guess() {
  // sets value of myGuess variable to the input letter
  myGuess = document.getElementById("input").value;
  rightGuess = 0;
  wrongGuess = 0;
  // if there is no input, the user is told to type in a letter
  if (myGuess == 0) {
    alert("Please enter a valid letter.");
  }
  //loops through the word starting from the beginning, then from the second letter, so on so forth until it has been looped through starting from each letter
  for (let i = 0; i < randomWord.length; i++) {
    //sets value of letterIndex to to position of the guessed letter in the word
    letterIndex = randomWord.indexOf(myGuess, i);
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
    //}
}














// event listener that triggers the guess function when the button is pressed
document.getElementById("btn1").addEventListener("click", guess);
// event listener for new game button that reloads page
//document.getElementById("btn2").addEventListener("click", reload);
// event listener that starts game when page is loaded