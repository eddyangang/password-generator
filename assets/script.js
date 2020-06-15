// Define constants
const characterRange = document.getElementById('characterRange');
const characterRangeNumber = document.getElementById('characterRangeNumber');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const form = document.getElementById('form');
const password = document.getElementById('password');


// Synce the range bar with number displayed
characterRangeNumber.addEventListener('input', sync);
characterRange.addEventListener('input', sync);

function sync(e) {
    let value = e.target.value;
    characterRangeNumber.value = value;
    characterRange.value = value;
}


// Using ASCII table to turn random numbers to characters
const uppercase_char_code = arrayFromLowToHigh(65, 90);
const lowercase_char_code = arrayFromLowToHigh(97, 122);
const number_char_code = arrayFromLowToHigh(48, 57);
const symbol_char_code = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterRangeNumber.value;
    const addUppercase = includeUppercase.checked;
    const addNumbers = includeNumbers.checked;
    const addSymbols = includeSymbols.checked;
    const newpassword = generatePassword(characterAmount, addUppercase, addNumbers, addSymbols);
    password.innerText = newpassword;
});

function generatePassword(characterAmount, addUppercase, addNumbers, addSymbols) {

    let charCodes = lowercase_char_code;
    if (addUppercase) charCodes = charCodes.concat(uppercase_char_code);
    if (addSymbols) charCodes = charCodes.concat(symbol_char_code);
    if (addNumbers) charCodes = charCodes.concat(number_char_code);

    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}