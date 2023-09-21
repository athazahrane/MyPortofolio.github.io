// navbar
const hamburger = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector('.nav-links').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// wa 
const linkWa = document.getElementById('btn-wa');

linkWa.addEventListener('click', () => {
    window.location.href = "https://wa.me/qr/JTMZ7BKVGHRSA1";
})