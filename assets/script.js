
var uppercaseLetters = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
var characters = ['!','@','#','$','%','&','*']
var numbers = ['1','2','3','4','5','6','7','8','9']
var total = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  window.alert ('Indicate the parameters of your password.');

  var lengthConfirm = prompt ('How many characters would you like?');
  // ensure user entry is acceptable response
  if (lengthConfirm < 8 || lengthConfirm > 128) {
    length = parseInt(prompt("Please enter a valid number from 8 to 128."));
  }

  var passCase = confirm('Include Uppercase Letters?');
    if(passCase) {
      total = total.concat (uppercaseLetters) 
    }

    var passCharacter = confirm ('Include Special Characters?');
    if(passCharacter) {
      total = total.concat (characters) 
    }

    var passNumber = confirm ('Include a Number');
    if(passNumber) {
      total = total.concat (numbers)
    }

    console.log (total)
    var password = []
      for (var i=0; i<lengthConfirm; i++) {
      var index = Math.floor (Math.random ()*total.length)
      console.log (index)
      console.log (total[index])
      password.push(total[index])
    }
  
    return password.join("")
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log (password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
