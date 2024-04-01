// Conversion Functions

// Convert text to binary
function textToBinary(text) {
    return text.split('').map(char => {
        const binary = char.charCodeAt(0).toString(2);
        return '0'.repeat(8 - binary.length) + binary;
    }).join(' ');
}

// Convert text to hex
function textToHex(text) {
    return text.split('').map(char => {
        const hex = char.charCodeAt(0).toString(16);
        return ('00' + hex).slice(-2);
    }).join(' ');
}

// Convert binary to text
function binaryToText(binaryString) {
    return binaryString.split(' ').map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
}

// Convert hex to text
function hexToText(hexString) {
    return hexString.split(' ').map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
}

// Convert decimal to binary
function decimalToBinary(decimalNumber) {
    return parseInt(decimalNumber, 10).toString(2);
}

// Convert binary to decimal
function binaryToDecimal(binaryString) {
    return parseInt(binaryString, 2).toString(10);
}

// Convert decimal to hex
function decimalToHex(decimalNumber) {
    return parseInt(decimalNumber, 10).toString(16);
}

// Convert hex to decimal
function hexToDecimal(hexString) {
    return parseInt(hexString, 16).toString(10);
}

// Convert text to decimal ASCII values
function textToDecimal(text) {
    return text.split('').map(char => char.charCodeAt(0).toString()).join(' ');
}

// Convert decimal ASCII values to text
function decimalToText(decimalString) {
    return decimalString.split(' ').map(num => String.fromCharCode(parseInt(num, 10))).join('');
}

// User Interface Functions

// Update input label based on selected conversion type
function updateInputLabel() {
    var conversionType = document.getElementById('conversionType').value;
    var inputLabel = 'Enter ';

    switch (conversionType) {
        case 'textToBinary':
        case 'textToHex':
        case 'textToDecimal':
            inputLabel += 'Text:';
            break;
        case 'binaryToText':
        case 'binaryToDecimal':
            inputLabel += 'Binary:';
            break;
        case 'hexToText':
        case 'hexToDecimal':
            inputLabel += 'Hex:';
            break;
        case 'decimalToBinary':
        case 'decimalToHex':
        case 'decimalToText':
            inputLabel += 'Decimal:';
            break;
        default:
            inputLabel = 'Enter Text:';
    }

    document.getElementById('textInputLabel').textContent = inputLabel;
}

// Convert data based on selected conversion type
function convertData() {
    var conversionType = document.getElementById('conversionType').value;
    var inputText = document.getElementById('textInput').value;
    var result;

    switch (conversionType) {
        case 'textToBinary':
            result = textToBinary(inputText);
            break;
        case 'textToHex':
            result = textToHex(inputText);
            break;
        case 'textToDecimal':
            result = textToDecimal(inputText);
            break;
        case 'binaryToText':
            result = binaryToText(inputText);
            break;
        case 'hexToText':
            result = hexToText(inputText);
            break;
        case 'decimalToBinary':
            result = decimalToBinary(inputText);
            break;
        case 'binaryToDecimal':
            result = binaryToDecimal(inputText);
            break;
        case 'decimalToHex':
            result = decimalToHex(inputText);
            break;
        case 'hexToDecimal':
            result = hexToDecimal(inputText);
            break;
        case 'decimalToText':
            result = decimalToText(inputText);
            break;
        default:
            result = 'Invalid conversion type';
    }

    displayResult(result, conversionType);
}

// Display result and show the "Copy Result" button
function displayResult(result, type) {
    var resultElement = document.getElementById('result');
    var copyButton = document.querySelector('.result-container button');

    resultElement.innerHTML = `${type.replace(/([A-Z])/g, ' $1').trim()}: ${result}`;
    copyButton.style.display = result ? 'inline-block' : 'none';
}

// Copy result to clipboard without the label
function copyToClipboard() {
    var resultElement = document.getElementById('result');
    var fullText = resultElement.innerText;
    var parts = fullText.split(': ');
    var resultText = parts.length > 1 ? parts[1] : parts[0];

    var textarea = document.createElement('textarea');
    textarea.value = resultText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    alert('Result copied to clipboard!');
}