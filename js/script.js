// Existing functions for navigation and actions
function buttont() {
   window.location.href = "https://calendly.com/cubecoast/free-trail-class?month=2022-07";
}

function mail() {
   window.location.href = "mailto:cubecoast22@gmail.com";
}

function login() {
   window.location.href = "login.html";
}

function insta() {
   window.location.href = "https://www.instagram.com/the_cubing_company?igsh=eHMxZWdsZHZsYzJk";
}

function facebook() {
   window.location.href = "https://www.facebook.com/profile.php?id=100091137981360";
}

function careers() {
   window.location.href = "https://giddy-jitterbug-075.notion.site/CubeCoast-Open-Roles-37cdd69163e9479e98aa6e7e65b77a42";
}

// Initialize AOS (Animate On Scroll)
AOS.init({
   offset: 60,
   duration: 900,
   once: true,
});

// New code: Live counter for stats section
document.addEventListener("DOMContentLoaded", () => {
   const statNumbers = document.querySelectorAll(".stat-number");
   const statsSection = document.querySelector("#stats");

   let statsVisible = false;

   function animateNumbers() {
       const DURATION = 2000; // ms — every counter runs for the same length of time
       let startTime = null;

       const step = (timestamp) => {
           if (startTime === null) startTime = timestamp;
           const progress = Math.min((timestamp - startTime) / DURATION, 1);
           // Ease-out so all numbers glide to their target together
           const eased = 1 - Math.pow(1 - progress, 3);

           statNumbers.forEach((stat) => {
               const target = +stat.getAttribute("data-target");
               const current = Math.round(target * eased);
               stat.textContent = current.toLocaleString();
           });

           if (progress < 1) {
               requestAnimationFrame(step);
           } else {
               // Lock every counter to its final value + "+" at the same moment
               statNumbers.forEach((stat) => {
                   const target = +stat.getAttribute("data-target");
                   stat.textContent = target.toLocaleString() + "+";
               });
           }
       };

       requestAnimationFrame(step);
   }

   function checkVisibility() {
       const statsPosition = statsSection.getBoundingClientRect().top;
       const windowHeight = window.innerHeight;

       if (statsPosition < windowHeight && !statsVisible) {
           statsVisible = true;
           animateNumbers();
       }
   }

   window.addEventListener("scroll", checkVisibility);
});
