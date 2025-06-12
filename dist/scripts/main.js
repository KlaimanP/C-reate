document.addEventListener("DOMContentLoaded", () => {
    const scrollArrow = document.querySelector(".scroll-arrow");
    const apresVideo = document.getElementById("apres-video");


    let hasScrolled = false;

    // Gère le scroll automatique
    function skipToSection() {
        if (hasScrolled) return;
        hasScrolled = true;

        apresVideo.scrollIntoView({ behavior: "smooth" });

        // Cache la flèche
        if (scrollArrow) {
            scrollArrow.style.opacity = "0";
            scrollArrow.style.pointerEvents = "none";
        }

        // Supprime le listener pour ne le faire qu'une fois
        window.removeEventListener("wheel", handleScroll);
        window.removeEventListener("keydown", handleKey);
    }

    // Si l'utilisateur scroll avec la molette
    function handleScroll(e) {
        if (e.deltaY > 0) {
            skipToSection();
        }
    }

    // Si l'utilisateur scrolle avec les touches (flèche ou barre espace)
    function handleKey(e) {
        const keys = ["ArrowDown", "PageDown", " "];
        if (keys.includes(e.key)) {
            skipToSection();
        }
    }

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKey);
});




/////////////menu////////////////////

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

function getScrollThreshold() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 430) {
    return 230;
  } else if (screenWidth <= 1024) {
    return 774;
  } else {
    return 1024;
  }
}

function toggleMenuVisibility() {
  const menu = document.getElementById('menu');
  const logo = document.getElementById('logo');
  const scrollThreshold = getScrollThreshold();

  if (window.scrollY > scrollThreshold) {
    menu.classList.add('visible');
    logo.classList.add('visible');
  } else {
    menu.classList.remove('visible');
    logo.classList.remove('visible');
  }

  // Close menu if scrolling
  closeMenu();
}

// On scroll
window.addEventListener('scroll', toggleMenuVisibility);

// On page load
document.addEventListener('DOMContentLoaded', () => {
  toggleMenuVisibility(); // call initially in case already scrolled
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


