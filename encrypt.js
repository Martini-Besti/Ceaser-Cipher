// Function to encrypt a text using Caesar cipher
function caesarEncrypt(plaintext, shift) {
    let encryptedText = '';
    
    for (let char of plaintext) {
        if (/[a-zA-Z]/.test(char)) {  // Check if character is a letter
            const shiftBase = char === char.toUpperCase() ? 65 : 97; // ASCII base for upper/lower case
            encryptedText += String.fromCharCode(((char.charCodeAt(0) - shiftBase + shift) % 26 + 26) % 26 + shiftBase);
        } else {
            encryptedText += char;  // Non-alphabetical characters are added as-is
        }
    }
    
    return encryptedText;
}

// Function to decrypt a text using Caesar cipher
function caesarDecrypt(ciphertext, shift) {
    return caesarEncrypt(ciphertext, -shift);  // Decrypt by reversing the shift
}

// Function to handle the button click and process the encryption or decryption
function processCipher(action) {
    const plaintext = document.getElementById('plaintext').value;
    const shift = parseInt(document.getElementById('shift').value);

    if (!plaintext || isNaN(shift) || shift < 1 || shift > 25) {
        alert("Please enter valid text and shift value (1-25).");
        return;
    }

    let resultText = '';

    if (action === 'encrypt') {
        resultText = caesarEncrypt(plaintext, shift);
    } else if (action === 'decrypt') {
        resultText = caesarDecrypt(plaintext, shift);
    }

    // Display the result
    document.getElementById('result').textContent = resultText;
}
