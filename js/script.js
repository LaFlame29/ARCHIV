const cards = document.querySelectorAll(".card-button");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const currentMenu = card.parentElement.querySelector('[class$="-menu"]');

    document.querySelectorAll('[class$="-menu"]').forEach((menu) => {
      if (menu !== currentMenu) {
        menu.style.display = "none";
      }
    });

    if (currentMenu.style.display === "block") {
      currentMenu.style.display = "none";
    } else {
      currentMenu.style.display = "block";
    }
  });
});

const menuButton = document.querySelector(".menu-button");
const headerMenu = document.querySelector(".header-menu");

menuButton.addEventListener("click", () => {
  if (headerMenu.style.display === "block") {
    headerMenu.style.display = "none";
  } else {
    headerMenu.style.display = "block";
  }
});

const aboutLink = document.querySelector(".about-link");

aboutLink.addEventListener("click", (event) => {
  event.preventDefault();
  headerMenu.style.display = "none";

  document.querySelector("#about-us").scrollIntoView({
    behavior: "smooth",
  });
});

const submenuButtons = document.querySelectorAll(".submenu-button");

submenuButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    const currentMenu = button.parentElement.nextElementSibling;

    document
      .querySelectorAll(".header-menu [class$='-menu']")
      .forEach((menu) => {
        if (menu !== currentMenu) {
          menu.style.display = "none";
        }
      });

    if (currentMenu.style.display === "block") {
      currentMenu.style.display = "none";
      button.classList.remove("open");
    } else {
      currentMenu.style.display = "block";
      button.classList.add("open");
    }
  });
});
