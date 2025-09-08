// js/portfolio.js

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedFilter = button.getAttribute("data-filter");

            // Update active button class
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Filter portfolio items
            portfolioItems.forEach(item => {
                const category = item.getAttribute("data-category");

                if (selectedFilter === "all" || category === selectedFilter) {
                    item.computedStyleMap.display = "block";
                    item.classList.add("fade-in");
                    item.classList.remove("fade-out");
                } else {
                    item.classList.remove("fade-in");
                    item.classList.add("fade-out");
                    // Delay hiding until after fade-out animation
                    setTimeout(() => {
                        item.style.display = "none";
                    }, 300); // Match CSS animation duration 
                }
            });
        });
    });
});