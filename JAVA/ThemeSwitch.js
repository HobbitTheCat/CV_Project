function activate(){
    var themeChanger = document.querySelector('.theme-changer');
    var currentBackground = window.getComputedStyle(themeChanger).getPropertyValue('background-image');


    if (currentBackground.includes("moon1")){
        themeChanger.style.backgroundImage = 'url(../../Res/sun.png)';
        localStorage.setItem("theme", "light");
        applyTheme("light");
    }else if(currentBackground.includes("sun")){
        themeChanger.style.backgroundImage = 'url(../../Res/a.png)';
        localStorage.setItem("theme", "auto");
        applyTheme("auto");
    }else if(currentBackground.includes("a.png")){
        themeChanger.style.backgroundImage = 'url(../../Res/moon1.png)';
        localStorage.setItem("theme", "dark");
        applyTheme("dark");
    }
}

function start_changer(position){
    var themeChanger = document.querySelector('.theme-changer');

    if(position === "auto"){
        themeChanger.style.backgroundImage = 'url(../../Res/a.png)';
    }else if(position === "dark"){
        themeChanger.style.backgroundImage = 'url(../../Res/moon1.png)';
    }else if(position === "light"){
        themeChanger.style.backgroundImage = 'url(../../Res/sun.png)';
    }
}

function applyTheme(theme) {

    const themeElements = document.querySelectorAll(".theme-change");

    for (const element of themeElements) {
        element.classList.remove("theme-auto", "theme-light", "theme-dark");
        element.classList.add(`theme-${theme}`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";

    applyTheme(savedTheme);
    start_changer(savedTheme);
});