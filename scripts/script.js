

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


function realtimeClock() {
    
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = ( hours < 12 ) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = 
        hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);

}



const themeToggle = document.getElementById('toggleDark');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');

    if(body.classList.contains('dark')){
        themeToggle.classList = 'bi bi-brightness-high-fill';
    }else{
        themeToggle.classList = 'bi bi-moon';
    }
});



// script.js
window.onload = function() {
    // Hide the preloader when the webpage content is fully loaded
    var preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}






