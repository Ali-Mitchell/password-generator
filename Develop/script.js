



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

window.alert ('Indicate the parameters of your password.');

console.log (alert)

var A = window.confirm ('More than 8 Characters');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
