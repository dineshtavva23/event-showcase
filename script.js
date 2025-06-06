const themeToggle = document.getElementById('toggle-btn');
const body = document.body;

themeToggle.addEventListener('click', () => {
  // Toggle class on body
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    // Optional: Change icon to moon
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    body.classList.add('light-theme');
    // Optional: Change icon to sun
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
