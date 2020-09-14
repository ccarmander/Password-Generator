// Assignment Code
var generateBtn = document.querySelector("#generate");

var number;
var specialCharacter;
var lowerLetter;
var upperLetter;
var enter;

lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
specialCharacters = ["@", "%", "+", "\\", "/", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var selections;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var pick;
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  enter = parseInt(prompt("Lets begin with how many characters you would like for your password. Choose between 8 and 128"));
  if (!enter) {
    alert("Sorry, we really need a number here betweem 8 and 128");
  } else if (enter < 8 || enter > 128) {
    alert("You must choose between 8 and 128");
    enter = parseInt(prompt("Please enter a number between 8 and 128"));
  } else {
    
    



    lowerLetter = confirm("Do you want lower case letters?");
    upperLetter = confirm("Do you want upper case letters?");
    specialCharacter = confirm("Do you want special characters?");
    number = confirm("Do you want numbers");
  };
//if NONE are picked
  if (!lowerLetter && !upperLetter && !specialCharacter && !number) {
    selections = alert("You must pick a selection");
  }
// if ALL 4 get picked YES
  else if (lowerLetter && upperLetter && specialCharacter && number) {    
      selections = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters, numbers);

  }
  //IF ONLY 3 GET PICKED
  else if (lowerLetter && upperLetter && specialCharacter) {
      selections = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters);

  }
  else if (lowerLetter && specialCharacter && number) {
      selections = lowerCasedCharacters.concat(specialCharacters, numbers);

  }
  else if (upperLetter && specialCharacter && number) {
      selections = upperCasedCharacters.concat(specialCharacters, numbers);

  }
  else if (lowerLetter && upperLetter) {
      selections = lowerCasedCharacters.concat(upperCasedCharacters);

  }
  else if (lowerLetter && specialCharacter) {
      selections = lowerCasedCharacters.concat(specialCharacters);

  }
  else if (lowerLetter && number) {
    selections = lowerCasedCharacters.concat(numbers);

  }
  else if (upperLetter && specialCharacter) {
    selections = upperCasedCharacters.concat(specialCharacters);
  
  }
  else if (upperLetter && number) {
    selections = upperCasedCharacters.concat(numbers);

  }
  else if (specialCharacter && number) {
    selections = specialCharacters.concat(numbers);upperLetter

  }
  else if (lowerLetter) {
    selections = lowerCasedCharacters;

  }
  else if (upperLetter) {
    selections = upperCasedCharacters;

  }
  else if (specialCharacter) {
    selections = specialCharacters;

  }
  else if (number) {
    selections = numbers;

  };
var password = [];

for (var i = 0; i < enter; i++) {
    var pickSelections = selections[Math.floor(Math.random() * selections.length)];
    password.push(pickSelections);
}

var pw = password.join("");
UserInput(pw);
return pw;
}

function UserInput(pw) {
  document.getElementById("password").textContent = pw;

}










