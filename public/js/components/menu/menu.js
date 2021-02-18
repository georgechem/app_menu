/**
 * To work requires first load files
 * - fadeInOutToggleClasses.js
 * - moveUpMoveDown.js
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
    moveUp(navMenu, 100);
    setTimeout(moveDown, 300, navSubMenu, 100);

});
navSubMenu.addEventListener('click', function(){
    moveUp(navSubMenu, 100);
    setTimeout(moveDown, 300, navMenu, 100);
    //moveDown(navMenu, 100)

});

