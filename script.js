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
console.log("generate password");


//Pop-ups (Prompts, Alerts, and Confirms along with if/esle conditions)
var passwordLength = prompt("How many characters would you like your password to contain?");//******password must be between 8 and 128 characters***********
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
//passwordLength = //Declaring variable. Saving charater amount
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


var lower = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"];
document.getElementById("password").innerHTML = lower; 
console.log (upper)

var upper = ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"];
document.getElementById("password").innerHTML = upper; 
console.log (upper)

var special = ["! @ # % ^ & * ( ) + { } | : ?"];
document.getElementById("password").innerHTML = special; 
console.log (special)

var num = ["0 1 2 3 4 5 6 7 8 9"];
document.getElementById("password").innerHTML = num; 
console.log (num)

var children = lower.contact (upper, special, num);
document.getElementById("password").innerHTML = children; 
console.log (children)

//use the Math.random function to randomly select a number between 

//$alert ("Congratulations, Your new password is" + )//*****I need to figure out what goes here to spit out the new password***********

//function getlower () {
 // return String.fromCharCode(Math.floor(Math.random() *26) + 97);
//}

//function getupper () {
  //return String.fromCharCode(Math.floor(Math.random() *26) + 65);
//}

//function getnumber () {
  //return String.fromCharCode(Math.floor(Math.random() *10) + 48);
//}

//function getspecial () {
 // const special = "!@#%^&*(){}[]+<>,.";
 // return special[(Math.floor(Math.random() * special.length)];
//}
//console.log(getspecial());
