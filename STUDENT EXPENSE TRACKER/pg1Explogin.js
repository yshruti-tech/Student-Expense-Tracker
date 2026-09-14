
/// Get the input fields
var username = document.getElementById("username");
var password = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var message = document.getElementById("message");

// When Login button is clicked
loginBtn.onclick = function() {

    // Get values entered by user
    var enteredUsername = username.value.trim();
    var enteredPassword = password.value;

    // Check if fields are empty
    if (enteredUsername == "" || enteredPassword == "") {
        message.innerHTML = "Please enter username and password.";
        return;
    }

    // Get previously saved credentials
    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    // FIRST TIME USER
    if (savedUsername == null || savedPassword == null) {

        // Save user's own credentials
        localStorage.setItem("username", enteredUsername);
        localStorage.setItem("password", enteredPassword);

        // Save logged-in username
        localStorage.setItem("loggedInUser", enteredUsername);

        // Open Dashboard
        window.location.href = "Dashboard.html";
        return;
    }
    // EXISTING USER
    if (
        enteredUsername == savedUsername &&
        enteredPassword == savedPassword
    ) {

        // Save logged-in username
        localStorage.setItem("loggedInUser", enteredUsername);

        // Open Dashboard
        window.location.href = "Dashboard.html";
    } else {

        // Wrong credentials
        message.innerHTML = "Incorrect username or password.";
    }
};
