document.addEventListener("DOMContentLoaded", function() {
    const users = [
        {
            "username" : "Praveen",
            "password" : "1234",
            "role" : "admin",
            "email" : "praveen@gmail.com"
        },
        {
            "username" : "user",
            "password" : "12345",
            "role" : "user",
            "email" : "user@gmail.com"
        }
    ];

    const loginForm = document.getElementById("loginForm");


    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const usernameInput = document.querySelector("input[type='text']");
        const passwordInput = document.querySelector("input[type='password']");

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

        if (user) {
            // Store user data in local storage
            localStorage.setItem("currentUser", JSON.stringify(user));
            
            // Redirect to editable index.html
            window.location.href = "index2.html";
        } else {
            alert("Invalid username or password");
        }
    });
});

