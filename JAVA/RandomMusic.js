const myArray = ["../../Res/music.mp3", "../../Res/music1.mp3", "../../Res/music2.mp3", "../../Res/music3.mp3"];
const msc_open = document.querySelector(".music audio");

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

window.onload = function() {
    const randomElement = getRandomElement(myArray);
    msc_open.src = randomElement;

    msc_open.volume = 0.1;
};
