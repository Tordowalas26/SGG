/**
 * Módulo de Control de Tema (RF-02)
 */
const ThemeModule = (() => {
  const THEME_KEY = 'sgg_theme';

  const init = () => {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
    applyTheme(savedTheme);

    const toggleCheckbox = document.getElementById('theme-toggle');
    if (toggleCheckbox) {
      toggleCheckbox.checked = (savedTheme === 'dark');
      toggleCheckbox.addEventListener('change', (e) => {
        const selectedTheme = e.target.checked ? 'dark' : 'light';
        applyTheme(selectedTheme);
        localStorage.setItem(THEME_KEY, selectedTheme);
      });
    }
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  return { init };
})();

document.addEventListener('DOMContentLoaded', ThemeModule.init);
