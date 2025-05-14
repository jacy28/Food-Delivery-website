// Get the password input and eye icon elements
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Add event listener to the eye icon
togglePassword.addEventListener("click", function() {
  // Toggle password visibility
  const type = password.type === "password" ? "text" : "password";
  password.type = type;
  
  // Toggle the eye icon
  this.classList.toggle("bi-eye");
  this.classList.toggle("bi-eye-slash");
});
