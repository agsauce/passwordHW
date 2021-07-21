// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generate(){}
var charset="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIGJKLMNOPQRSTUVWXYZ!@#$%^&*()_+><:{}[]"
var passwordLength=8-128;
var password="";
for(var 1=0<passwordLength;1++){
  var randonnum = Math.floor(Math.random()* charset.length);
  password =+ charest.substring(randomnum, randomnum+1);
}
document.getElementById( input).value = password; 