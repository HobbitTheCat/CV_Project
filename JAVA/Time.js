// function showTime() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     const timeString = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
//     document.getElementById('time').innerText = timeString;
// }
//
// setInterval(showTime, 1000);
function showDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-indexed, so we add 1
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const dateString = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    const timeString = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    document.getElementById('time').innerText = timeString;
}

setInterval(showDateTime, 1000);
