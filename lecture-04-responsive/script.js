console.log("Page loaded");
let clickCount = 0;

onclick = function () {
    clickCount++;
    console.log("Mouse clicked " + clickCount + " times");
}

let darkmode = false;
document.body.classList.toggle("darkmode", darkmode);
document.body.classList.toggle("lightmode", !darkmode);

const darkmodeBtn = document.getElementById("darkModeToggle");
darkmodeBtn.onclick = function () {
    darkmode = !darkmode;
    if (darkmode) {
        document.body.classList.toggle("darkmode", darkmode);
        document.body.classList.toggle("lightmode", !darkmode);
    } else {
        document.body.classList.toggle("darkmode", darkmode);
        document.body.classList.toggle("lightmode", !darkmode);
    }
        console.log("Darkmode: " + darkmode);
}