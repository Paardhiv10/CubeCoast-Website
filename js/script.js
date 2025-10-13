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
       const maxTarget = Math.max(...Array.from(statNumbers).map(stat => +stat.getAttribute("data-target")));
       const speed = Math.ceil(maxTarget / 200); // Adjust the counter speed for the largest number

       statNumbers.forEach((stat) => {
           const target = +stat.getAttribute("data-target");
           let current = 0;

           const increment = Math.ceil(target / (maxTarget / speed)); // Dynamically calculate the increment based on the largest number

           const updateNumber = () => {
               current += increment;
               if (current > target) current = target;
               stat.textContent = current.toLocaleString(); // Format numbers with commas
               if (current < target) requestAnimationFrame(updateNumber);
               else stat.textContent += "+"; // Append the "+" sign once the number is finished
           };

           updateNumber();
       });
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
