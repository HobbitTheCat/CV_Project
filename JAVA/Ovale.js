const blob = document.getElementById("blob");

window.onpointermove = event => {
    blob.animate({
    }, { duration: 3000, fill: "forwards" });
}