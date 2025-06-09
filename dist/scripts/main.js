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

window.addEventListener('scroll', () => {
  const menu = document.getElementById('menu');
  const logo = document.getElementById('logo');

  // Affichage du menu burger et logo selon scrollY
  if (window.scrollY > 1024) {
    menu.classList.add('visible');
    logo.classList.add('visible');
  } else {
    menu.classList.remove('visible');
    logo.classList.remove('visible');
  }

  // Fermer le menu si ouvert quand on scroll
  closeMenu();
});

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const logo = document.getElementById('logo');

  if (window.scrollY <= 1024) {
    menu.classList.remove('visible');
    logo.classList.remove('visible');
  }
});









/////////////////////////////////////


