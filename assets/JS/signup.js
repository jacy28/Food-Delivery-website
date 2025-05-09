document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value;
    const errorElement = document.getElementById('signupError');
    
    // Clear previous error messages
    errorElement.style.display = 'none';
    
    // Validate Username
    if (username === "") {
      errorElement.textContent = "Username is required.";
      errorElement.style.display = 'block';
      return;
    }
    
    if (username.length < 3) {
      errorElement.textContent = "Username must be at least 3 characters long.";
      errorElement.style.display = 'block';
      return;
    }
  
    // Validate Password
    if (password === "") {
      errorElement.textContent = "Password is required.";
      errorElement.style.display = 'block';
      return;
    }
  
    if (password.length < 6) {
      errorElement.textContent = "Password must be at least 6 characters long.";
      errorElement.style.display = 'block';
      return;
    }
  
    // Get users from localStorage or create an empty array if no users exist
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the username already exists
    const userExists = users.find(user => user.username === username);
  
    if (userExists) {
      errorElement.textContent = "Username already exists. Please choose another.";
      errorElement.style.display = 'block';
      return;
    }
  
    // Create new user and add them to the users array
    users.push({ username, password });
  
    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    // Redirect to login page after successful signup
    alert("Signup successful! Please log in to continue...");
    window.location.href = "login.html";  // Redirect to login page
  });
  