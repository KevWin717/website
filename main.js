// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for fade-in effect
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach(section => {
    observer.observe(section);
});

// Menu button functionality
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
