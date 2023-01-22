function checkPasswordStrength() {
    const password = document.getElementById("passwordInput").value;
    let strength = 0;

    if (password.length < 9) {
        document.getElementById("result").innerHTML = "Password Too Short!!!";
        document.getElementById("more_res").innerHTML = "Using passwords that are less than 9 characters in length is a bad practice. Use longer passwords. Recommended length is 15+.";
        return;
    } else if (password.length >= 9 && password.length < 15) {
        strength += 4;
    } else {
        strength += 9;
    }

    // check for uppercase letters
    if (password.match(/[A-Z]/)) {
        strength += 1;
    }

    // check for lowercase letters
    if (password.match(/[a-z]/)) {
        strength += 1;
    }

    // check for numbers
    if (password.match(/\d+/)) {
        strength += 1;
    }

    // check for special characters
    if (password.match(/[!@#$%^&*]/)) {
        strength += 2;
    }

    // check password strength and display a message
    if (strength == 5 || strength ==6) {
        document.getElementById("result").innerHTML = "Weak Password :(";
        document.getElementById("more_res").innerHTML = "Our system noticed your password uses a decent amount of" +
            " characters but is not complex enough. We highly recommend you to increase the length " +
            "of your password and use different combinations of uppercase and lowercase characters, as well as digits and other" +
            " special characters.";
    } else if (strength < 10 && strength > 6) {
        document.getElementById("result").innerHTML = "Password Can Be Improved";
        document.getElementById("more_res").innerHTML = "Our system noticed your password uses a decent amount of" +
            " characters and incorporates basic complexity of characters. We still recommend you to increase the length " +
            "of your password and probably make it not too obvious.";
        return;
    } else {
        document.getElementById("result").innerHTML = "Strong Password :)";
        document.getElementById("more_res").innerHTML = "The password entered uses the recommended amount of " +
            " characters and incorporates good enough complexity of characters. We appreciate your awareness in cybersecurity " +
            "and encourage you to follow all the best practices for a much safer experience.";
        return;
    }
}

function checkPassword() {

    var input = document.getElementById("passwordInput").value;
    var passwords = new XMLHttpRequest();
    passwords.open("GET", "rockyou.txt", false);
    passwords.onreadystatechange = function () {
        if (passwords.readyState === 4) {
            if (passwords.status === 200 || passwords.status === 0) {
                var allPasswords = passwords.responseText.split("\n");
                for (var i = 0; i < allPasswords.length; i++) {
                    if (allPasswords[i].trim() == input) {
                        document.getElementById("result").innerHTML = "Password Too Common!!!";
                        document.getElementById("more_res").innerHTML = "Password was found in" +
                            " our database that contains the most commonly used passwords. It is highly recommended you change" +
                            " your password as soon as possible. Follow the best practices and make sure your password is " +
                            "atleast 15 characters long and does not have popular names and patterns.";
                        return;
                    }
                }
                document.getElementById("extra-tests").innerHTML = "Password Not Found in Database. Passed initial check."
                checkPasswordStrength();
            }
        }
    };
    passwords.send(null);
}


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
