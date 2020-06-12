// JavaScript File
// let statements
let myGuess;
let letterOne;
const letterTwo = document.getElementById("l2").value;
const letterThree = document.getElementById("l3").value;
const letterFour = document.getElementById("l4").value;
const letterFive = document.getElementById("l5").value;
const words = ["pizza"]
const randomWord = words[Math.floor(Math.random() * words.length)];
let wrongGuessList;
let letterIndex;
let letterOutput;
const maxMistakes = 7;
const mistakes = 0;
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
  myGuess = document.getElementById("input").value;
  //
  for (let i = 0; i < randomWord.length; i++) {
    letterIndex = randomWord.indexOf(myGuess, i);
    if (letterIndex < 0) {
      alert(letterIndex);
      break;
    }
    letterOutput = randomWord.substring(letterIndex, letterIndex + 1);
    alert (letterIndex);
    
    }
    //else if (letterIndex > -1) {
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
    }
  //}
  //if (letterIndex == -1) {
      //mistakes = mistakes + 1;
      //if (mistakes == 1) {
        //document.getElementById("hangman").style.display="block";
        //alert("e");
      //}
    //}
//}














// event listener that triggers the guess function when the button is pressed
document.getElementById("btn1").addEventListener("click", guess);
// event listener for new game button that reloads page
//document.getElementById("btn2").addEventListener("click", reload);
// event listener that starts game when page is loaded
