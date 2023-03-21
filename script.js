// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
 
  var selectedPasswordCharacters = [];  
  var passwordLength = 0;  

  // Function to prompt user for password options
function getPasswordOptions() {
    selectedPasswordCharacters = []
    passwordLength = prompt ("Please enter desired password length");

    if (passwordLength < 8 ){
        alert ("Your password length must be above 8 characters");
        return;
    } else if (passwordLength > 128 ){
        alert ("Your password length must be less than 128 characters");
        return;
    }

    var useSpecialCharacters = confirm ("Would you like special characters in your password?");

    if (useSpecialCharacters === true){
        selectedPasswordCharacters.push(...specialCharacters);
    }

    var useNumericCharacters = confirm ("Would you like numeric characters in your password?");

    if (useNumericCharacters === true ){
        selectedPasswordCharacters.push(...numericCharacters); 
    }

    var useLowerCasedCharacters = confirm ("Would you like lower cased characters in your password?");

    if (useLowerCasedCharacters === true ){
        selectedPasswordCharacters.push(...lowerCasedCharacters);
    }

    var useUpperCasedCharacters = confirm ("Would you like upper cased characters in your password?");

    if (useUpperCasedCharacters === true ){
        selectedPasswordCharacters.push(...upperCasedCharacters);
    }

}
  
  // Function for getting a random element from an array
  function getRandom(array) {
    var password = ''; 

    for (let i = 0; i < passwordLength; i++){
        var randomIndex = Math.floor(Math.random() * array.length);
        var item = array[randomIndex];
        password += item; 
   } 
   return password;
  } 

  
  // Function to generate password with user input
  function generatePassword() {
    getPasswordOptions();

    if (selectedPasswordCharacters.length > 0) {    
        return getRandom(selectedPasswordCharacters);
    } else {
        return " ";
    }   
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);