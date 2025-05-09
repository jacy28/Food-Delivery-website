// index.html
if (window.location.pathname.includes('index.html') || window.location.pathname === "/") {
  document.addEventListener('click', function () {
    window.location.href = 'login.html';
  });
}

// login.html
function closeLogin() {
  window.location.href = 'index.html';
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault(); // stop default form action

  let userName = document.getElementById('userName').value.trim();
  let password = document.getElementById('password').value.trim();
  let nameError = document.getElementById("nameError");
  let passwordError = document.getElementById("passwordError");

  // Clear previous error messages
  nameError.textContent = "";
  passwordError.textContent = "";

  let hasError = false;

  // Validate username
  if (userName === "") {
    nameError.textContent = "Username is required.";
    nameError.style.display = "block";
    hasError = true;
  }

  // Validate password
  if (password === "") {
    passwordError.textContent = "Password is required.";
    passwordError.style.display = "block";
    hasError = true;
  }

  // If no errors, proceed with checking username and password
  if (!hasError) {
    // Get the list of users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered username exists
    const user = users.find(user => user.username === userName);

    if (!user) {
      // If username doesn't exist, show message and redirect to signup page
      nameError.textContent = "Account not found. Please create an account.";
      nameError.style.display = "block";
      return;
    }

    if (user.password !== password) {
      passwordError.textContent = "Incorrect password.";
      passwordError.style.display = "block";
      hasError = true;
    }

    // If no errors, log the user in
    if (!hasError) {
      // Store the login status in localStorage
      localStorage.setItem('isLoggedIn', true);
      // Redirect to dashboard
      window.location.href = "dashboard.html";
    }
  }
});






