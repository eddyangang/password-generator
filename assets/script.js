// Assignment Code
var generateBtn = document.querySelector("#generate");
var clipboard = new ClipboardJS("#copy");

// Write password to the #password input
function writePassword() {
    var characterAmount = prompt("How many character would you like (8-128)?");
    if (characterAmount < 8) {
        alert("You need at least 8 characters in your password");
    } else if (characterAmount > 128) {
        alert("Too many characters. Cannot exceed 128 characters");
    } else {
        var includeUppercase = confirm("Would you like Uppercase letters?");
        var includeLowercase = confirm("Would you like Lowercase letters?");
        var includeNumbers = confirm("Would you like Numbers?");
        var includeSymbols = confirm("Would you like Symbols?");
        var password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Using ASCII table to turn random numbers to characters
const uppercase_char_code = arrayFromLowToHigh(65, 90);
const lowercase_char_code = arrayFromLowToHigh(97, 122);
const number_char_code = arrayFromLowToHigh(48, 57);
const symbol_char_code = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));


function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    let charCodes = [];
    if (includeLowercase) charCodes = charCodes.concat(lowercase_char_code);
    if (includeUppercase) charCodes = charCodes.concat(uppercase_char_code);
    if (includeNumbers) charCodes = charCodes.concat(number_char_code);
    if (includeSymbols) charCodes = charCodes.concat(symbol_char_code);

    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array
}
