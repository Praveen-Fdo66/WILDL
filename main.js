  // Get the button element
  const button = document.getElementById('loginbutton');

  // Add event listener to the button
  button.addEventListener('click', function() {
    // Redirect to the login.html page
    window.location.href = 'login.html';
  });




  document.addEventListener("DOMContentLoaded", function() {
    const dashboardButton = document.querySelector(".dash");

    dashboardButton.addEventListener("click", function() {
        window.location.href = "newsview.html";
    });
});