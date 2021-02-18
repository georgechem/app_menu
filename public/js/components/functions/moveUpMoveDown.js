// move element Up
function moveUp(element, value){
    let top = 0;
    let fps = 60;
    let duration = 500;
    let moveElementTop = setInterval(function(){
        top -= (value/fps);
        if (top <= -value){
            clearInterval(moveElementTop);
            top = -value;
        }
        element.style.top = `${top}%`;
    },duration/fps);
}

// move element down
function moveDown(element, value){
    let top = -100;
    let fps = 60;
    let duration = 500;
    let moveElementDown = setInterval(function(){
        top += (value/fps);
        if (top >= 0){
            clearInterval(moveElementDown);
            top = 0;
        }
        element.style.top = `${top}%`;
    },duration/fps);
}
