import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Counter Logic
  const counterBtn = document.querySelector<HTMLButtonElement>('#counter');
  let count = 0;

  if (counterBtn) {
    counterBtn.addEventListener('click', () => {
      count++;
      counterBtn.innerHTML = `Clicks: ${count}`;
      // Mini burst animation or effect could go here
      counterBtn.style.transform = 'scale(0.95)';
      setTimeout(() => counterBtn.style.transform = '', 100);
    });
  }

  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  const root = document.documentElement;

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.style.colorScheme === 'dark' || getComputedStyle(root).colorScheme === 'dark';

      if (isDark) {
        // Switch to Light
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#213547');
        root.style.setProperty('--text-muted', '#666');
        root.style.setProperty('--glass-nav', 'rgba(255, 255, 255, 0.8)');
        root.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.03)');
        root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.08)');
        root.style.colorScheme = 'light';

        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
      } else {
        // Switch to Dark
        root.style.removeProperty('--bg-color');
        root.style.removeProperty('--text-color');
        root.style.removeProperty('--text-muted');
        root.style.removeProperty('--glass-nav');
        root.style.removeProperty('--glass-bg');
        root.style.removeProperty('--glass-border');
        root.style.colorScheme = 'dark';

        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
      }
    });
  }

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
