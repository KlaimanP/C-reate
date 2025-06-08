// -------- Gestion dynamique du thème (logo + menu burger) --------

function getBackgroundColorAtElement(el) {
  let current = el;
  while (current) {
    const bg = window.getComputedStyle(current).backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      return bg;
    }
    current = current.parentElement;
  }
  return "rgb(255, 255, 255)";
}

function isColorDark(rgb) {
  const match = rgb.match(/\d+/g);
  if (!match) return false;
  const [r, g, b] = match.map(Number);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance < 128;
}

function updateThemeByBackground() {
  const logo = document.getElementById('logo');
  const menu = document.getElementById('menu');
  const logoImg = document.getElementById('logo-img');

  const bgColor = getBackgroundColorAtElement(logo);
  const isDark = isColorDark(bgColor);

  if (isDark) {
    logoImg.src = 'dist/images/logo_fn_txt.png'; // fond sombre → logo clair
    logo.classList.add('theme-light');
    menu.classList.add('theme-light');
    logo.classList.remove('theme-dark');
    menu.classList.remove('theme-dark');
  } else {
    logoImg.src = 'dist/images/logo_fb_txt.png'; // fond clair → logo sombre
    logo.classList.add('theme-dark');
    menu.classList.add('theme-dark');
    logo.classList.remove('theme-light');
    menu.classList.remove('theme-light');
  }
}

// -------- Menu burger toggle --------

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

function closeMenu() {
  document.getElementById("menu-bar").classList.remove("change");
  document.getElementById("nav").classList.remove("change");
  document.getElementById("menu-bg").classList.remove("change-bg");
}

// -------- Gestion scroll (apparition + thème + fermeture menu) --------

function handleScrollBehavior() {
  const menu = document.getElementById('menu');
  const logo = document.getElementById('logo');

  if (window.scrollY > 1024) {
    menu.classList.add('visible');
    logo.classList.add('visible');
  } else {
    menu.classList.remove('visible');
    logo.classList.remove('visible');
  }

  closeMenu();
  updateThemeByBackground();
}

window.addEventListener('scroll', handleScrollBehavior);

document.addEventListener('DOMContentLoaded', () => {
  handleScrollBehavior(); // même effet au chargement
});
