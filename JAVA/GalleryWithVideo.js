const buttons = document.querySelectorAll('.image, .video');
const overlay = document.querySelector('.overlay');
const content = document.querySelector('.images');
const counter = document.querySelector('.counter');

const allButtons = Array.from(buttons);
const length = allButtons.length;

let global = -1;
let isOpen = false;


function open(index) {
    const itemType = allButtons[index].classList.contains('image') ? 'img' : 'video';
    const source = allButtons[index].querySelector(itemType).src;

    content.innerHTML = `<${itemType} src="${source}" ${itemType === 'video' ? 'controls autoplay class="overlay_video"' : ''}  ${itemType === 'img' ? 'class="overlay_img"' : ''}>`;
    overlay.classList.add('open');
    global = index;

    is_video(itemType);

    isOpen = true;
    counter.innerHTML = `${global + 1}/${length}`;
}


function is_video(itemType){
    if (itemType === 'video') {
        const videoElement = content.querySelector('video');
        videoElement.volume = 0.05;
    }
}

function sub_open(global){
    const itemType = allButtons[global].classList.contains('image') ? 'img' : 'video';
    const source = allButtons[global].querySelector(itemType).src;

    content.innerHTML = `<${itemType} src="${source}" ${itemType === 'video' ? 'controls autoplay class="overlay_video"' : ''}  ${itemType === 'img' ? 'class="overlay_img"' : ''}>`;

    is_video(itemType);
}

function next_img(){
    if(global+1 < allButtons.length){
        global+=1;
        sub_open(global);
    }
    else{
        global = 0;
        sub_open(global);
    }
    counter.innerHTML = (global + 1) + "/" + length;
}

function prev_img(){


    if(global-1 >= 0){
        global-=1;
        sub_open(global);
    }
    else{
        global = allButtons.length-1;
        sub_open(global);
    }
    counter.innerHTML = (global + 1) + "/" + length;
}


function close_img() {
    const itemType = allButtons[global].classList.contains('image') ? 'img' : 'video';
    const source = allButtons[global].querySelector(itemType).src;

    content.innerHTML = `<${itemType} src="${source}" ${itemType === 'video' ? 'controls' : ''}>`;

    overlay.classList.remove('open');
    isOpen = false;
}

function handleKeyPress(event) {
    if (event.key === 'Escape' && isOpen) {
        close_img();
    } else if (event.key === 'ArrowRight' && isOpen) {
        next_img();
    } else if (event.key === 'ArrowLeft' && isOpen) {
        prev_img();
    }
}

buttons.forEach((item, index) => {
    item.addEventListener('click', () => open(index));
});

document.addEventListener('keydown', handleKeyPress);



const videoPreviews = document.querySelectorAll('.video_previews');

videoPreviews.forEach(video => {
    video.muted = true;

    video.addEventListener('mouseover', function() {
        this.play();
    });

    video.addEventListener('mouseout', function() {
        this.pause();
    });
});


