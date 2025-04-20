// assets/js/main.js
// Handles menu toggle and theme toggle

function toggleMenu(btn) {
  const nav = document.getElementById('main-nav');
  const expanded = nav.classList.toggle('active');
-  btn.setAttribute('aria-expanded', expanded);
+  btn.setAttribute('aria-expanded', expanded.toString());
}

function toggleMenu() {
  var nav = document.getElementById('main-nav');
  nav.classList.toggle('active');
}

function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.querySelector('.floating-toggle');
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
}

window.addEventListener('DOMContentLoaded', () => {
  // Load theme preference
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  const toggleBtn = document.querySelector('.floating-toggle');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});

