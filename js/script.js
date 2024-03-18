"use strict"

// Burger  menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
 iconMenu.addEventListener("click", function (e) {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  menuBody.classList.toggle('_active');
 });
}


// Scroll on click
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
 menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", onMenuLinkClick);
 });

 function onMenuLinkClick(e) {
  const menuLink = e.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
   const gotoBlock = document.querySelector(menuLink.dataset.goto);
   const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

   if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
   }

   window.scrollTo({
    top: gotoBlockValue,
    behavior: "smooth"
   });
   e.preventDefault();
  }
 }
}

// slider
const swiper = new Swiper('.slider-main-block', {
 // Optional parameters
 loop: true,
 // Navigation arrows
 navigation: {
  nextEl: '.body-main-block__arrow.swiper-button-next',
  prevEl: '.body-main-block__arrow.swiper-button-prev',
 },
});

// tabs
const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
 const targetElement = e.target;
 let currentActiveIndex = null;
 let newActiveIndex = null;
 if (targetElement.closest('.tabs-deals__button')) {
  tabNavItems.forEach((tabNavItem, index) => {
   if (tabNavItem.classList.contains('active')) {
    currentActiveIndex = index;
    tabNavItem.classList.remove('active');
   }
   if (tabNavItem === targetElement) {
    newActiveIndex = index;
   }
  });
  targetElement.classList.add('active');
  tabItems[currentActiveIndex].classList.remove('active');
  tabItems[newActiveIndex].classList.add('active');
 }
});