// Wait for DOM to load 
document.addEventListener("DOMContentLoaded", () => {


    // ====== Hamburger Menu Toggle ======
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("open");

            // Toggle aria-expanded for accessiblity
            const expanded = hamburger.getAttribute("aria-expanded") === "true";
            hamburger.setAttribute("aria-expanded", String(!expanded));
        });
    }

    // ====== Typing Effect on .Typing-text ======
    const typingElement = document.querySelector("typing-text");

    if (typingElement) {
        const fullText = typingElement.textContent.trim();
        typingElement.textContent = ""; // Clear initial text

        let index = 0;

        function typeText () {
            if (index < fullText.length) {
                typingElement.textContent += fullText.charAt(index);
                index++;
                setTimeout(typeText, 40); // Typing speed in ms
            }
        }
        typeText();
    }


    // ====== Smooth Scrolling for Anchor Links ======
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({behavior: "smooth"});
            }
        });
    });
});