document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Optional overlay
  const overlay = document.getElementById("overlay");

  // Toggle nav and overlay
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    overlay?.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

  // Hide nav and overlay when clicking a nav link
  const links = navLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      overlay?.classList.remove("show");
      hamburger.classList.remove("active");
    });
  });

  // Hide nav and overlay when clicking outside
  overlay?.addEventListener("click", () => {
    navLinks.classList.remove("show");
    overlay.classList.remove("show");
    hamburger.classList.remove("active");
  });

  // Anniversary countdown
  const daysSpan = document.getElementById('days-together');
  const days = calculateDaysTogether('2023-10-15');
  daysSpan.textContent = days;

  // Show countdown section after fade delay
  const countdownSection = document.querySelector('.anniversary-countdown');
  setTimeout(() => {
    countdownSection.classList.add('show');
  }, 300);

  // Start typewriter animation
  loopTypewriter();
});

function calculateDaysTogether(startDateString) {
  const startDate = new Date(startDateString);
  const today = new Date();
  const diffTime = today - startDate;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

// Typewriter Effect
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
    setTimeout(loopTypewriter, isDeleting ? 1200 : 600);
  }
}
