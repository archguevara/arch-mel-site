document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");


  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });


  const links = navLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});

function calculateDaysTogether(startDateString) {
  const startDate = new Date(startDateString);
  const today = new Date();
  
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

document.addEventListener('DOMContentLoaded', () => {
  const daysSpan = document.getElementById('days-together');
  const days = calculateDaysTogether('2023-10-15');
  daysSpan.textContent = days;
});

const countdownSection = document.querySelector('.anniversary-countdown');
setTimeout(() => {
  countdownSection.classList.add('show');
}, 300); 

const targetText = "Join us as we capture our memories together, one photo at a time.";
const typewriterTarget = document.getElementById("typewriter-text");

let charIndex = 0;
let isDeleting = false;

function loopTypewriter() {
  let displayedText = targetText.substring(0, charIndex);
  typewriterTarget.textContent = displayedText;

  if (!isDeleting && charIndex < targetText.length) {
    charIndex++;
    setTimeout(loopTypewriter, 60); 
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(loopTypewriter, 30);
  } else {
    isDeleting = !isDeleting;
    setTimeout(loopTypewriter, isDeleting ? 1000 : 600); 
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loopTypewriter();
});
