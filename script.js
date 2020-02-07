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

var passwordLength = prompt("How many characters would you like your password to conatain?");//******password must be between 8 and 128 characters***********
if (passwordLength < 8) { //JavaScript condition. Check to see if password length is less than 8 characters.  
  alert ("Password length must be at least 8 charachters");//If less than 8 characters, inform user "password length must be at least 8 charchters".
} else if (passwordLength > 128) {//JavaScript condition. //Check to see if password length is more than 128 characters.   
  alert ("Password length must be less than 128 characters");//If more than 128 characters, inform user "password length must not be more than 128 characters".
}
var confirmSpecial = confirm("Click to confirm including special characters");//A pop will ask if you would like to include special characters
var confirmNum = confirm("Click to confrim including numeric characters");//A pop-up will ask if you would like to include numeric characters
var confirmLower = confirm("Click to confirm including lowercase charaters");//A pop-up will ask if you would like to include lowercase characters
var confirmUpper = confirm("Click to confirm including uppercase charaters");//A pop-up will ask if you would like to include upper case characters

//Declaring Varialbles
//$var passwordLength =$ //Declaring variable. Saving charater amount
var confirmSpecial = true//Declaring variable. Saving confirmSpecial variable to true. This is considered a true/false boolean
var confirmNum = true;//Declaring variable. Saving confirmNum variable to true.  This is considered a true/false boolean
var confirmLower = true;//Declaring variable. Saving confirm variable to true. This is considered a true/false boolean
var confirmUpper = true;//Declaring variable. Saving confirm variable to true. This is considered a true/false boolean


//Utilized Console.log feature in Chrome Developers Tools to debug varialbles  
//$console.log (passwordLength);
console.log (confirmSpecial);
console.log (confirmNum);
console.log (confirmLower);
console.log (confirmUpper);

//Condition Statements

//$if (passwordLength < 8) {
//$alert("Password length must be at least 8 characters and no more than 128");
//$}
//Check to see if password length is between less than 8 characters or more than 128.  If less than 8 characters, inform user "password length must be at least 8 charchters and no more than 128 characters"
//$else if (passwordLength > 128){
 //$ alert("Password length must be at least 8 characters and no more than 128");
//$}

//$alert ("Congratulations, Your new password is" + )//*****I need to figure out what goes here to spit out the new password***********

