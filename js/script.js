
function generatePassword() {
    let password = "";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const specialChars = "!@#$%^&*-?";
    let selectedChars = "";
    const passwordLength = document.getElementById("length").value;

    if (document.getElementById("uppercase").checked) {
        selectedChars += upperChars;
    }
    if (document.getElementById("lowercase").checked) {
        selectedChars += lowerChars;
    }
    if (document.getElementById("digits").checked) {
        selectedChars += digits;
    }
    if (document.getElementById("special").checked) {
        selectedChars += specialChars;
    }

    for (let i = 0; i < passwordLength; i++) {
        password += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
    }

    document.getElementById("password").value = password;
}
