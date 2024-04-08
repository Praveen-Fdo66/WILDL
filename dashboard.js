document.addEventListener("DOMContentLoaded", function() {
    const userList = document.getElementById("userList");

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem("users"));

    // Check if user data exists
    if (userData && userData.users) {
        // Loop through each user and create user elements
        userData.users.forEach(user => {
            const userDiv = document.createElement("div");
            userDiv.classList.add("user");

            const username = document.createElement("p");
            username.classList.add("username");
            username.textContent = `Username: ${user.username}`;

            const role = document.createElement("p");
            role.classList.add("role");
            role.textContent = `Role: ${user.role}`;

            const email = document.createElement("p");
            email.classList.add("email");
            email.textContent = `Email: ${user.email}`;

            userDiv.appendChild(username);
            userDiv.appendChild(role);
            userDiv.appendChild(email);

            userList.appendChild(userDiv);
        });
    } else {
        // Display message if no user data found
        userList.textContent = "No user data found.";
    }
});
