// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.auth-form');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // Remove active class from all buttons and forms
            tabButtons.forEach(btn => btn.classList.remove('active'));
            forms.forEach(form => form.classList.remove('active'));

            // Add active class to clicked button and corresponding form
            this.classList.add('active');
            document.getElementById(tabName + '-form').classList.add('active');
        });
    });

    // Form submission handlers
    const signinForm = document.getElementById('signin-form');
    const loginForm = document.getElementById('login-form');

    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signin-name').value;
            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;
            const confirm = document.getElementById('signin-confirm').value;

            if (password !== confirm) {
                alert('Passwords do not match!');
                return;
            }

            if (name && email && password) {
                alert('Account created successfully for ' + name + '!');
                // Reset form
                signinForm.reset();
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const remember = document.getElementById('remember').checked;

            if (email && password) {
                alert('Login successful for ' + email + '!');
                if (remember) {
                    alert('This device will be remembered.');
                }
                // Reset form
                loginForm.reset();
            }
        });
    }
});
