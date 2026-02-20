console.log("Page loaded");
let clickCount = 0;

onclick = function () {
    clickCount++;
    console.log("Mouse clicked " + clickCount + " times");
}

let darkmode = false;
if (localStorage.getItem('darkMode') !== null) {
    darkmode = JSON.parse(localStorage.getItem('darkMode'));
} else {
    darkmode = false; // default value
}
document.body.classList.toggle("darkmode", darkmode);
document.body.classList.toggle("lightmode", !darkmode);

const darkmodeBtn = document.getElementById("darkModeToggle");
darkmodeBtn.onclick = function () {
    darkmode = !darkmode;
    localStorage.setItem('darkMode', JSON.stringify(darkmode));
    if (darkmode) {
        document.body.classList.toggle("darkmode", darkmode);
        document.body.classList.toggle("lightmode", !darkmode);
    } else {
        document.body.classList.toggle("darkmode", darkmode);
        document.body.classList.toggle("lightmode", !darkmode);
    }
        console.log("Darkmode: " + darkmode);
}

const lastUpdated = document.getElementById("lastUpdated");
const now = new Date();
lastUpdated.textContent = "Last Updated: " + now.toLocaleString();