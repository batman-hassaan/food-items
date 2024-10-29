// Show/hide forms
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const appMenu = document.getElementById('app-menu');

document.getElementById('show-register').addEventListener('click', () => {
  loginContainer.style.display = 'none';
  registerContainer.style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', () => {
  registerContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});

// Handle Registration
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;

  // Simple user data storage using localStorage (for demo purposes)
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  alert('Registration successful! Please login.');
  registerContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});

// Handle Login
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    alert('Login successful!');
    loginContainer.style.display = 'none';
    appMenu.style.display = 'block';
  } else {
    alert('Invalid username or password.');
  }
});
