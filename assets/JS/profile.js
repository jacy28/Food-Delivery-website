// Fetch users
const loggedInUser = localStorage.getItem('loggedInUser');
const users = JSON.parse(localStorage.getItem('users')) || [];
const currentUser = users.find(user => user.username === loggedInUser);

  if (!currentUser) {
    // If user data is missing
    alert("User data not found. Please log in again.");
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  }

  // Elements
  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const profilePassword = document.getElementById("profilePassword");
  const profileLocation = document.getElementById("profileLocation");
  const profilePhone = document.getElementById("profilePhone");
  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.getElementById("saveBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  // Populate fields
  profileName.value = currentUser.username;
  profilePassword.value = currentUser.password;
  profileEmail.value = currentUser.email || '';
  profileLocation.value = currentUser.location || '';
  profilePhone.value = currentUser.phone || '';

  // Make username and password always readonly
  profileName.setAttribute("readonly", true);
  profilePassword.setAttribute("readonly", true);

  // Disable save at start
  saveBtn.disabled = true;

  // Enable editable fields (except username/password)
  editBtn.addEventListener("click", () => {
    profileEmail.removeAttribute("readonly");
    profileLocation.removeAttribute("readonly");
    profilePhone.removeAttribute("readonly");

    editBtn.disabled = true;
    saveBtn.disabled = false;
  });

  // Save changes
  saveBtn.addEventListener("click", () => {
    currentUser.email = profileEmail.value;
    currentUser.location = profileLocation.value;
    currentUser.phone = profilePhone.value;

    const updatedUsers = users.map(user =>
      user.username === currentUser.username ? currentUser : user
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    profileEmail.setAttribute("readonly", true);
    profileLocation.setAttribute("readonly", true);
    profilePhone.setAttribute("readonly", true);

    saveBtn.disabled = true;
    editBtn.disabled = false;

    alert("Profile updated successfully!");
  });

  // Logout button
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  });

