// script.js
window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  reveals.forEach((element) => {
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

reveal();