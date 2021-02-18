// Menu elements
const navMenu = document.getElementById('navMenu');
const navSubMenu = document.getElementById('navSubMenu');

// Menu functions
function toggleHiddenClass(elements = []){
    elements.forEach(function(item){
        item.classList.toggle('hidden');
    });

}
// Fadeout function
function fadeOut(element, toggleClasses = []){
    let opacity = 1.0;
    // duration in ms
    let duration = 500;
    // desired fps
    let fps = 60;
    let fadeOutInterval = setInterval(function(){
    opacity -= (1/fps);
    if (opacity <= 0){
        opacity = 0;
        clearInterval(fadeOutInterval);
        if (toggleClasses.length !== 0){
            toggleHiddenClass(toggleClasses);
        }
    }

    element.style.opacity = opacity;
    },duration/fps);
}
// FadeIn function
function fadeIn(element, toggleClasses = []){
    let opacity = 0.0;
    // duration in ms
    let duration = 1000;
    // desired fps
    let fps = 60;
    let fadeOutInterval = setInterval(function(){
        opacity += (1/fps);
        if (opacity >= 1){
            opacity = 1;
            clearInterval(fadeOutInterval);
            if (toggleClasses.length !== 0){
                toggleHiddenClass(toggleClasses);
            }
        }

        element.style.opacity = opacity;
    },duration/fps);
}

// Menu actions
navMenu.addEventListener('click', function(){
    fadeOut(navMenu, [navMenu, navSubMenu]);
    fadeIn(navSubMenu);
});
navSubMenu.addEventListener('click', function(){
    fadeOut(navSubMenu, [navMenu, navSubMenu]);
    fadeIn(navMenu);
});

