// 🎉 Event Handling Example
const helloBtn = document.getElementById("helloBtn");
const helloOutput = document.getElementById("helloOutput");

helloBtn.addEventListener("click", () => {
  helloOutput.textContent = "👋 Hello, you clicked the button!";
});

// 🎮 Interactive Feature 1: Light/Dark Mode Toggle
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🎮 Interactive Feature 2: Counter
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

// 📋 Form Validation
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const formSuccess = document.getElementById("formSuccess");

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission
  let valid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate Email
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate Password
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success feedback
  if (valid) {
    formSuccess.textContent = "🎉 Form submitted successfully!";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
