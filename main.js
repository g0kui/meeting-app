// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Close menu when clicking on a nav link
        const navLinks = navMenu.querySelectorAll('.nav-link, .btn-primary');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Form Validation Functions

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation (supports international format)
function isValidPhone(phone) {
    const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
    return phoneRegex.test(phone);
}

// Password validation (at least 8 chars, 1 uppercase, 1 lowercase, 1 number)
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

// Name validation
function isValidName(name) {
    return name.trim().length >= 2;
}

// Show error for input field
function showError(input) {
    input.classList.add('error');
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.style.display = 'block';
    }
}

// Clear error for input field
function clearError(input) {
    input.classList.remove('error');
    const errorMessage = input.parentElement.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}

// Signup Form Validation
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Full Name validation
        const fullName = document.getElementById('fullName');
        if (!isValidName(fullName.value)) {
            showError(fullName);
            isValid = false;
        } else {
            clearError(fullName);
        }
        
        // Email validation
        const email = document.getElementById('email');
        if (!isValidEmail(email.value)) {
            showError(email);
            isValid = false;
        } else {
            clearError(email);
        }
        
        // Phone validation
        const phone = document.getElementById('phone');
        if (!isValidPhone(phone.value)) {
            showError(phone);
            isValid = false;
        } else {
            clearError(phone);
        }
        
        // Password validation
        const password = document.getElementById('password');
        if (!isValidPassword(password.value)) {
            showError(password);
            isValid = false;
        } else {
            clearError(password);
        }
        
        // Confirm Password validation
        const confirmPassword = document.getElementById('confirmPassword');
        if (confirmPassword.value !== password.value) {
            showError(confirmPassword);
            isValid = false;
        } else {
            clearError(confirmPassword);
        }
        
        // Account Type validation
        const accountType = document.getElementById('accountType');
        if (accountType.value === '') {
            showError(accountType);
            isValid = false;
        } else {
            clearError(accountType);
        }
        
        // Terms validation
        const terms = document.getElementById('terms');
        const termsError = document.getElementById('termsError');
        if (!terms.checked) {
            termsError.style.display = 'block';
            isValid = false;
        } else {
            termsError.style.display = 'none';
        }
        
        if (isValid) {
            // Redirect to dashboard on successful validation
            window.location.href = 'dashboard.html';
        }
    });
    
    // Real-time validation
    const inputs = signupForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.id === 'fullName' && this.value) {
                if (!isValidName(this.value)) {
                    showError(this);
                } else {
                    clearError(this);
                }
            } else if (this.id === 'email' && this.value) {
                if (!isValidEmail(this.value)) {
                    showError(this);
                } else {
                    clearError(this);
                }
            } else if (this.id === 'phone' && this.value) {
                if (!isValidPhone(this.value)) {
                    showError(this);
                } else {
                    clearError(this);
                }
            } else if (this.id === 'password' && this.value) {
                if (!isValidPassword(this.value)) {
                    showError(this);
                } else {
                    clearError(this);
                }
            } else if (this.id === 'confirmPassword' && this.value) {
                const password = document.getElementById('password');
                if (this.value !== password.value) {
                    showError(this);
                } else {
                    clearError(this);
                }
            }
        });
    });
}

// Login Form Validation
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Email validation
        const loginEmail = document.getElementById('loginEmail');
        if (!isValidEmail(loginEmail.value)) {
            showError(loginEmail);
            isValid = false;
        } else {
            clearError(loginEmail);
        }
        
        // Password validation (just check if not empty for login)
        const loginPassword = document.getElementById('loginPassword');
        if (loginPassword.value.trim() === '') {
            showError(loginPassword);
            isValid = false;
        } else {
            clearError(loginPassword);
        }
        
        if (isValid) {
            // Redirect to dashboard on successful validation
            window.location.href = 'dashboard.html';
        }
    });
    
    // Real-time validation for login
    const loginEmail = document.getElementById('loginEmail');
    if (loginEmail) {
        loginEmail.addEventListener('blur', function() {
            if (this.value && !isValidEmail(this.value)) {
                showError(this);
            } else if (this.value) {
                clearError(this);
            }
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});