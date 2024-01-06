const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


let interval = null;

document.querySelector("h1").onmouseover = event => {
    let iteration = -2;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if(iteration >= event.target.dataset.value.length){
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}



const tiltEls = document.querySelectorAll('.tilt')

const tiltMove = (x, y) => `perspective(500px) scale(1.1) rotateX(${x}deg) rotateY(${y}deg)`

tiltEls.forEach(tilt => {
    const height = tilt.clientHeight
    const width = tilt.clientWidth

    tilt.addEventListener('mousemove', (e) => {
        const x = e.layerX
        const y = e.layerY
        const multiplier = 50

        const xRotate = multiplier * ((x - width / 2) / width)
        const yRotate = -multiplier * ((y - height / 2) / height)

        tilt.style.transform = tiltMove(xRotate, yRotate)
    })

    tilt.addEventListener('mouseout', () => tilt.style.transform = tiltMove(0, 0))
})


const blob = document.getElementById("blob");

window.onpointermove = event => {
    blob.animate({
    }, { duration: 3000, fill: "forwards" });
}