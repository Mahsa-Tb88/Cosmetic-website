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

const formTitleSelect = document.querySelectorAll(".form-select-title");
formTitleSelect.forEach((formSelect) => {
  formSelect.addEventListener("click", () => {
    console.log(formSelect.nextElementSibling);
    if (formSelect.nextElementSibling.style.display == "block") {
      formSelect.nextElementSibling.style.display = "none";
    } else {
      formSelect.nextElementSibling.style.display = "block";
    }
  });
});

const titleSelects = document.querySelectorAll(".title-select");
titleSelects.forEach((title) => {
  title.addEventListener("click", (e) => {
    const newFormTitleSelect =
      title.parentElement.parentElement.previousElementSibling
        .firstElementChild;
    newFormTitleSelect.textContent = e.target.textContent;
    newFormTitleSelect.style.color = "#0c0c0c";
    newFormTitleSelect.style.fontSize = "large";
    newFormTitleSelect.parentElement.nextElementSibling.style.display = "none";
  });
});

const contactUsform = document.querySelector(".contact-us-form-header");
const formContactContainer = document.querySelector(".form");
contactUsform.addEventListener("click", () => {
  formContactContainer.classList.toggle("form-contact-container");
});

// show sections of contact

const contactsContainer = document.querySelectorAll(".contact-container h3");

contactsContainer.forEach((contact) => {
  console.log(contact);
  contact.addEventListener("click", () => {
    const section = contact.nextElementSibling;
    const iconClass = contact.lastElementChild.firstElementChild;
    section.classList.contains("contact-desc")
      ? iconClass.classList.replace("fa-plus", "fa-minus")
      : iconClass.classList.replace("fa-minus", "fa-plus");
    section.classList.toggle("contact-desc");
  });
});
