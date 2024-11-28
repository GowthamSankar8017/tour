let navitems = document.querySelector(".navitems");
let menubar = document.querySelector("#menubar");
let vidbtn = document.querySelectorAll(".vidbtn");


menubar.addEventListener("click", () => {
  navitems.classList.toggle("active");
  
});

// vidbtn.forEach((butt) => {
//   butt.addEventListener("click", () => {
//     document.querySelector(".controls .active").classList.remove("active");
//     butt.classList.add("active");
//     let videosrc = butt.getAttribute("data-src");
//     console.log(videosrc);
//     document.querySelector("#videoslider").src = videosrc;
//   });
// });

document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const packages = document.getElementById("packages").value;

    if (name && email && phone && date && packages) {
      alert(
        "Booking Successful!\n" +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Date: ${date}\n` +
          `Package: ${packages}`
      );
    } else {
      alert("Please fill out all fields.");
    }
  });

function learnMore() {
  alert(
    "Discover more about our tours, packages, and exclusive deals by contacting us or visiting our website!"
  );
}

function bookNow(packageName) {
  alert(
    `You have selected the ${packageName} package. Proceeding to booking...`
  );
}

// ///////

window.onscroll = () => {
  formsContainer.style.display = "none";
};

const userIcon = document.querySelector("#userlogin");
const formsContainer = document.getElementById("formsContainer");
const registerFormContainer = document.getElementById("registerFormContainer");
const loginFormContainer = document.getElementById("loginFormContainer");
const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

// Toggle the forms container when the user icon is clicked
userIcon.addEventListener("click", () => {
  if (formsContainer.style.display === "block") {
    formsContainer.style.display = "none"; // Close the form container
  } else {
    formsContainer.style.display = "block"; // Open the form container
    registerFormContainer.style.display = "block"; // Show register form by default
    loginFormContainer.style.display = "none"; // Hide login form
  }
});

// Show the login form when "Login" link is clicked
showLogin.addEventListener("click", () => {
  registerFormContainer.style.display = "none";
  loginFormContainer.style.display = "block";
});

// Show the register form when "Register" link is clicked
showRegister.addEventListener("click", () => {
  loginFormContainer.style.display = "none";
  registerFormContainer.style.display = "block";
});

// Register form submission (store data in localStorage)

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  // Check if the email is already registered
  if (localStorage.getItem(email)) {
    alert("This email is already registered. Please log in.");
    return;
  }

  // Store the registration data in localStorage
  const userData = { name, email, password };
  localStorage.setItem(email, JSON.stringify(userData));

  alert("Registration successful! You can now log in.");

  // Switch to login form after registration
  registerFormContainer.style.display = "none";
  loginFormContainer.style.display = "block";
});

// Login form submission (validate against localStorage data)
let loggedinemail = "";

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Retrieve user data from localStorage
  const userData = JSON.parse(localStorage.getItem(email));
  console.log(userData);
  // Validate user credentials
  if (!userData) {
    alert("No account found with that email.");
    return;
  }

  if (userData.password !== password) {
    alert("Incorrect password.");
    return;
  }

  alert("Login successful!");
  loggedinemail = email;
  console.log(loggedinemail);
  // Hide the forms after successful login
  formsContainer.style.display = "none";

  // Reset the form fields
  document.getElementById("loginForm").reset();
  document.getElementById("registerForm").reset();

  // Optionally, show a welcome message
  alert(`Welcome, ${userData.name}!`);
});

// // Logout function
function logout() {
  const confirmLogout = confirm("Are you sure you want to log out?");

  if (confirmLogout) {
    if (loggedinemail) {
      localStorage.removeItem(loggedinemail); // Remove the specific user's data
      alert("You have been logged out.");
    }
    loggedinemail = "";
  } else {
    alert("Logout canceled.");
  }
}
