// Function to get password length
function getPasswordLength(){
  const passwordLengthElement = document.getElementById("password-length");
  const passwordLength = Number(passwordLengthElement.value);
  if (passwordLengthElement.value === "") {
    // return alert("Please enter a password length");
    return document.getElementById("password-length-errors").innerHTML = 
      "Please enter a password length"; 
  } 
  if (passwordLength < 5 || passwordLength > 50) {     
    // return alert("Password length must be at least 5 and no longer than 50");
    return document.getElementById("password-length-errors").innerHTML = 
      "Password length must be at least 5 and no longer than 50";
  }
  document.getElementById("password-length-errors").innerHTML = "";
  return Number(passwordLength);  
}

// Function to get the checkbox values
function getPasswordProperties() {
  const ids = ["upperCheckbox", "lowerCheckbox", "numberCheckbox", "specialCheckbox"];
  const properties = {}; 
  for (const id of ids) {
    const element = document.getElementById(id);
    properties[id] = element.checked;
  }
  return properties;
}

// Function to generate upper and lower case characters using ASCII A = 65 else a = 97
function getChars(uppercaseChars = true) {
  const start = uppercaseChars ? 65 : 97; 
  const chars = [];
  for (let i = start; i < start + 26; i++) {
    chars.push(String.fromCharCode(i));
  }
  return chars;
}
// Function to generate numbers 0 thru 9
function getNumbers () {
  let numbers = [];
  for (let i = 0; i <= 9; i++) {
    numbers.push(i);
  }
  return numbers;
}
// Global variables to get them just once.
const uppercaseChars = getChars(true);
const lowercaseChars = getChars(false);
const numbers = getNumbers();
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];

// Function to generate password
function generatePassword() {
  const passwordLength = getPasswordLength();
  const properties = getPasswordProperties();
  // Generate an array that combines all possible characters to select from each array.
  // The spread operator allows us to push elements in the individual arrays 
  // into the allCharacters array instead of the arrays themselves [[], [], [], []].
  const allCharacters = [];
  if (properties.upperCheckbox) allCharacters.push(...uppercaseChars);
  if (properties.lowerCheckbox) allCharacters.push(...lowercaseChars);
  if (properties.numberCheckbox) allCharacters.push(...numbers);
  if (properties.specialCheckbox) allCharacters.push(...specialCharacters);
  
  if (allCharacters.length === 0) {
    return document.getElementById("checkbox-message").innerHTML = 
      "You must select at least one checkbox.";
  } else {
    document.getElementById("checkbox-message").innerHTML = "";
  }

  let password = [];
  for (let passToGenerate = 0; passToGenerate < passwordLength; passToGenerate++){
    const randomPassword = Math.floor(Math.random() * allCharacters.length);
    const char = allCharacters[randomPassword];
    password.push(char);
  } 
  const passwordString = password.join(""); // join all elements in array into a string
  document.getElementById("generated-password").innerHTML = passwordString;
}

