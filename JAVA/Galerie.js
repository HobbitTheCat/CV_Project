const buttons = document.querySelectorAll('.image');
const overlay = document.querySelector('.overlay');
const img_open = document.querySelector('.overlay_content img');
const counter = document.querySelector('.counter');

const allButtons = Array.from(buttons);
var length = allButtons.length;

var global = -1;
var is_open = false;


function open(ell){
    overlay.classList.add('open');
    img_open.src = ell.currentTarget.querySelector('img').src;

    global = allButtons.indexOf(ell.currentTarget);

    is_open = true;
    counter.innerHTML = (global + 1) + "/" + length;
}

function next_img(){
    if(global+1 < allButtons.length){
        img_open.src = allButtons[global+1].querySelector('img').src;
        global+=1;
    }
    else{
        global = 0;
        img_open.src = allButtons[global].querySelector('img').src;
    }
    counter.innerHTML = (global + 1) + "/" + length;
}

function prev_img(){
    if(global-1 >= 0){
        img_open.src = allButtons[global-1].querySelector('img').src;
        global-=1;
    }
    else{
        global = allButtons.length-1;
        img_open.src = allButtons[global].querySelector('img').src;
    }
    counter.innerHTML = (global + 1) + "/" + length;
}

function close_img(){


    overlay.classList.remove('open');
    is_open = false;
}

function key_press(event){
    if(event.key === 'Escape' && is_open){
        close_img();
    }else if(event.key === 'ArrowRight' && is_open){
        next_img();
    }else if(event.key === 'ArrowLeft' && is_open){
        prev_img();
    }
}

buttons.forEach(button => button.addEventListener('click', open));
document.addEventListener('keydown', key_press);
