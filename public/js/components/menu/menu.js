// Menu elements
const navMenu = document.getElementById('navMenu');
const navSubMenu = document.getElementById('navSubMenu');

// Menu functions
function toggleHiddenClass(){
    navMenu.classList.toggle('hidden');
    navSubMenu.classList.toggle('hidden');
}


// Menu actions
navMenu.addEventListener('click', toggleHiddenClass);
navSubMenu.addEventListener('click', toggleHiddenClass);
