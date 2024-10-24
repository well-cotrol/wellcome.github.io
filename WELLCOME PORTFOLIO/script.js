document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example validation (you can enhance this as needed)
    if (username === "admin" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
});
