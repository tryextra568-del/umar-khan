// =========================
// UMAR KHAN WEBSITE
// =========================

// Navbar Background on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(212,175,55,.2)";
    } else {
        navbar.style.background = "rgba(0,0,0,.7)";
        navbar.style.boxShadow = "none";
    }
});

// Smooth Fade Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".glass-card, .service-card, .portfolio-card, .price-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
});

// Contact Form
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("✅ Thank you! Your message has been received.");

        form.reset();
    });
}
