function checkPassword() {
    let start = new Date().getTime();
    let input = document.getElementById("passwordInput").value;
    let passwords = new XMLHttpRequest();
    passwords.open("GET", "rockyou.txt", false);
    passwords.onreadystatechange = function () {
        let time;
        let end;
        if (passwords.readyState === 4) {
            if (passwords.status === 200 || passwords.status === 0) {
                let allPasswords = passwords.responseText.split("\n");
                for (let i = 0; i < allPasswords.length; i++) {
                    if (allPasswords[i] === input) {
                        end = new Date().getTime();
                        time = end - start;
                        alert("password very weak. found in list in " + time + " milliseconds");
                        return;
                    } else if (allPasswords[i].includes(input.substring(0,5))) {
                        alert("password weak");
                        return;
                    }
                }
            }
            alert("password not found in list");
        }
    }
    passwords.send(null);
}

function enableCheckPassword() {
    let input = document.getElementById("passwordInput").value;
    if (input.length >= 8) {
        document.getElementById("checkPasswordButton").disabled = false;
    } else {
        document.getElementById("checkPasswordButton").disabled = true;
    }
}

function generatePassword() {
    var password = "";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var digits = "0123456789";
    var specialChars = "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
    var selectedChars = "";
    var passwordLength = document.getElementById("length").value;

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

    for (var i = 0; i < passwordLength; i++) {
        password += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length));
    }

    document.getElementById("password").value = password;
}
