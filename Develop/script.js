// Assignment code here
function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var password = "";
  var characterSet = "";

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecialChars = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert("Please select at least one character type.");
    return;
  }

  var passwordLength = parseInt(prompt("Enter the desired length of the password (8-128 characters):"));

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Invalid password length. Please try again.");
    return;
  }

  if (includeLowercase) {
    characterSet += lowercaseChars;
    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
  }
  if (includeUppercase) {
    characterSet += uppercaseChars;
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
  }
  if (includeNumeric) {
    characterSet += numericChars;
    password += numericChars.charAt(Math.floor(Math.random() * numericChars.length));
  }
  if (includeSpecialChars) {
    characterSet += specialChars;
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }

  for (var i = password.length; i < passwordLength; i++) {
    password += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
  }

  return password;
}

var generatedPassword = generatePassword();
alert("Your generated password is: " + generatedPassword);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
