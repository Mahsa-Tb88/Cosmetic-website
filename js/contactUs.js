const navbarToggler = document.querySelector(".navbar_toggler");
const navbar = document.querySelector(".navbar");
const navbarMenu = document.querySelector(".navbar-menu");
navbarToggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav_expanded");
  if (navbarMenu.classList.contains("navbar-menu-show")) {
    navbarMenu.classList.remove("navbar-menu-show");
    navbarMenu.classList.add("navbar-menu-hidden");
  } else if (navbarMenu.classList.contains("navbar-menu-hidden")) {
    navbarMenu.classList.remove("navbar-menu-hidden");
    navbarMenu.classList.add("navbar-menu-show");
  }
});

const formTitleSelect = document.querySelector(".form-subject-title");
const formTitleUl = document.querySelector(".form-subject-title-items");
formTitleSelect.addEventListener("click", () => {
  if (formTitleUl.style.display == "block") {
    formTitleUl.style.display = "none";
  } else {
    formTitleUl.style.display = "block";
    console.log(formTitleUl.style.display);
  }
});

const titleSelects = document.querySelectorAll(".title-select");
titleSelects.forEach((title) => {
  title.addEventListener("click", (e) => {
    const newFormTitleSelect = document.querySelector(".form-subject-title h4");
    newFormTitleSelect.textContent = e.target.textContent;
    newFormTitleSelect.style.color = "#0c0c0c";
    newFormTitleSelect.style.fontSize = "large";
    formTitleUl.style.display = "none";
  });
});
