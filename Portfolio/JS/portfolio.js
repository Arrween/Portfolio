document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Sélectionner le bouton "Télécharger mon CV"
const downloadCVBtn = document.getElementById('downloadCVBtn');

// Ajouter un écouteur d'événement pour le clic sur le bouton
downloadCVBtn.addEventListener('click', function() {
    window.location.href = '../cv.pdf';
});

// JavaScript pour la flèche de remontée
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var headerBottom = header.getBoundingClientRect().bottom;

    if (window.scrollY > headerBottom) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

