// wa 
document.getElementById('btn-wa').addEventListener('click', function () {
    window.location.href = "https://api.whatsapp.com/qr/JTMZ7BKVGHRSA1?autoload=1&app_absent=0";
})

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
