const loginContainer = document.getElementById('login-container');
        const registerContainer = document.getElementById('register-container');
        const appMenu = document.getElementById('app-menu');
        // const mainContent = document.querySelector('.main');
        const mainContent = document.querySelector('.main-content');

        // Toggle between login and register forms
        document.getElementById('show-register').addEventListener('click', () => {
            loginContainer.style.display = 'none';
            registerContainer.style.display = 'block';
        });

        document.getElementById('show-login').addEventListener('click', () => {
            registerContainer.style.display = 'none';
            loginContainer.style.display = 'block';
        });

        // Handle Registration
        document.getElementById("register-form").addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("register-username").value;
            const password = document.getElementById("register-password").value;

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Registration successful! Please login.');
            registerContainer.style.display = 'none';
            loginContainer.style.display = 'block';
        });

        // Handle Login
        document.getElementById("login-form").addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;

            const storedUsername = localStorage.getItem('username');
            const storedPassword = localStorage.getItem('password');
            if (username === storedUsername && password === storedPassword) {
                alert('Login successful!');
                loginContainer.style.display = 'none';
                appMenu.style.display = 'block'; // Show the main app on successful login
            } else {
                alert('Invalid username or password.');
            }
        });

        // Content Mapping for Menu Items
        

// Update Main Content Function
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        const contentKey = item.getAttribute('data-content');
        // const footer = document.querySelector('.footer-bar');
        
        // Update main content based on the clicked menu item
        updateMainContent(contentKey);

        // Ensure the footer is always visible on menu click
        // footer.style.display = 'block';
    });
});

function updateMainContent(contentKey) {
    if (contentMapping[contentKey]) {
        mainContent.innerHTML = contentMapping[contentKey];
    } else {
        mainContent.innerHTML = `<div>Content not found for ${contentKey}</div>`;
    }
}

function toggleCart() {
    const cartPanel = document.getElementById('cartPanel');
    cartPanel.classList.toggle('open');
}

