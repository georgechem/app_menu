/**
 * To work requires first load files
 * - fadeInOutToggleClasses.js
 *
 * @type {HTMLElement}
 */

// Menu elements
const navMenu = document.getElementById('navMenu');
const navSubMenu = document.getElementById('navSubMenu');

const menuLinks = document.querySelectorAll('.menu__link')
menuLinks.forEach(function(link){
    link.onclick = function(e){
        e.preventDefault();
    }
} );

// Menu actions
navMenu.addEventListener('click', function(){
    fadeOut(navMenu, [navMenu, navSubMenu]);
    fadeIn(navSubMenu);
});
navSubMenu.addEventListener('click', function(){
    fadeOut(navSubMenu, [navMenu, navSubMenu]);
    fadeIn(navMenu);
});

