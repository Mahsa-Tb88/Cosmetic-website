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

const width = window.innerWidth;
const height = window.innerHeight;

console.log(`The viewport's width is ${width} and the height is ${height}.`);

//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets"
    
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});
