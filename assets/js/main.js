"use strict";

// HTML Elements
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const header = document.querySelector("header");
const words = document.querySelectorAll(".word");
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Scroll effect navbar
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Navbar menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active");
    header.classList.toggle("sticky");
});

// Color problem
if (header.classList === "sticky") {
    hamburger.addEventListener("click", () => {
        header.classList.remove("sticky");
    });
} else {
    hamburger.addEventListener("click", () => {
        header.classList.add("sticky");
    });
};

window.addEventListener("scroll", () => {
    navBar.classList.remove("active", window.scrollY === 0);
    hamburger.classList.remove("active", window.scrollY === 0);
});

// Navbar closes
document.querySelectorAll(".nav-bar").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
}));

// ScrollSpy
function handleScroll(event) {
    for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const navLink = navLinks[i];
        if (section.offsetTop <= window.scrollY + 50 && section.offsetTop + section.offsetHeight > window.scrollY + 50) {
            section.classList.add('active');
            navLink.classList.add('active');
        } else {
            section.classList.remove('active');
            navLink.classList.remove('active');
        };
    };
};

  window.addEventListener('scroll', handleScroll);

// Word effect
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = 
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);

// Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function currentSlides (n) {
    showSlides(slideIndex = n);
};

function showSlides (n) {
    let i;
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) { slideIndex = 1 };
    if (n < 1) { slideIndex = slides.length };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    };
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

// Email
Email.send({
    Host : "",
    Username : "",
    Password : "",
    To : '',
    From : "",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
    message => alert(message)
);