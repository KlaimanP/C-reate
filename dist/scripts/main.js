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


///////////////////////////////////// Change image à propos //////////////////////

const imageElement = document.getElementById("image");
    const buttonElement = document.getElementById("toggleBtn");

    const images = [
      {
        src: "dist/images/animation perso Jour.png",
        classe: "jour"
      },
      {
        src: "dist/images/animation perso Nuit.png",
        classe: "nuit"
      }
    ];

    let index = 0;

    function changerImage() {
      // Diminuer l'opacité
      imageElement.style.opacity = 0;

      // Attendre la fin du fondu avant de changer l'image
      setTimeout(() => {
        index = (index + 1) % images.length;
        imageElement.src = images[index].src;

        // Mise à jour classe du bouton
        buttonElement.classList.remove("jour", "nuit");
        buttonElement.classList.add(images[index].classe);

        // Ramener l'opacité
        imageElement.style.opacity = 1;
      }, 300); // délai légèrement inférieur à transition pour effet fluide
    }


