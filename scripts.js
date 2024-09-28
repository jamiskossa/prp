// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Code pour le slideshow automatique
    let slides = document.querySelectorAll('.slideshow div');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000);

    // Code pour le chat en direct
    let chatBox = document.querySelector('.chat-box');
    let chatToggle = document.querySelector('.chat-toggle');

    chatToggle.addEventListener('click', function() {
        chatBox.classList.toggle('open');
    });
});

// scripts.js

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change l'image toutes les 5 secondes
}

