const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const modeIcon = document.querySelector('#mode-icon');

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
}

darkModeToggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
  document.querySelector('.nav-links').classList.toggle('dark-mode');
  document.querySelectorAll('.grid-card').forEach(card => card.classList.toggle('dark-mode'));
  document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('dark-mode'));
  
  document.querySelector('footer').classList.toggle('dark-mode');
  
  const submitBtn = document.querySelector('.submit-btn');
  if (submitBtn) {
    submitBtn.classList.toggle('dark-mode');
  }
  

  if (document.body.classList.contains('dark-mode')) {
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
  } else {
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
  }
};
