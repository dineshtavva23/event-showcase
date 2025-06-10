const themeToggle = document.getElementById('toggle-btn');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
