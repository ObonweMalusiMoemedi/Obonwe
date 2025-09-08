// js/contact/js

document.addEventListener("DOMContentLoaded", ()=> {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    // Helper function: validate email format 
    function isValidEmail(email) {
        // Simple regex for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Show error message
    function showError(input, message) {
        const errorSpan = input.parentElement.querySelector(".error-message");
        errorSpan.textContent = message;
        input.classList.add("input-error");
    }

    // Form validation
    form.addEventListener("submit", (event) => {
        let hasError = false;

        // Validate Name
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Please enter your name.");
            hasError = true;
        } else {
            clearError(nameInput);
        }

        // validate Email
        if (emailInput.value.trim() === "") {
            showError(emailInput, "Please enter your email.");
            hasError = true;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Please enter a valid email address.");
            hasError = true;
        } else {
            clearError(emailInput);
        }


        // Validate Message
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Please enter a message.");
            hasError = true;
        } else {
            clearError(messageInput);
        }

        // Stop form submission if any errors
        if (hasError) {
            event.preventDefault();
        }
    });

    // Real-time validation (optional)
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener("input", () => {
            clearError(input);
        });
    });
});