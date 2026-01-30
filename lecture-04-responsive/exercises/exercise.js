console.log("Connection OK")

//Exercise 1
const btnName = document.getElementById("btnName");
const nameOut = document.getElementById("nameOutput");
const nameIn = document.getElementById("nameInput");
let cheat = false;

btnName.onclick = function(){
    if (nameIn.value === "iddqd"){
        cheat ^= true;
        nameOut.innerText = "Cheat activated"
    }
    else if (nameIn.value){
        nameOut.innerText = nameIn.value;
    }
    else{
        nameOut.innerText = 'Learn to write, dummy'
    }
    if (cheat){
        nameOut.style.color = "magenta";
        nameOut.style.fontFamily = "Wingdings";
        nameOut.style.fontWeight = "bold";
        nameOut.style.fontSize = "64px";
        btnName.innerText = "Cheat activated";
    }
    else{
        nameOut.style.color = "darkblue";
        nameOut.style.fontFamily = "Papyrus";
        nameOut.style.fontWeight = "bold";
        nameOut.style.fontSize = "32px";
        btnName.innerText = "Show Name";

    }
}

//Exercise 2
const btnToggle = document.getElementById("btnToggle");
const btnToggle2 = document.getElementById("btnToggle2");
const toggleStatus = document.getElementById("toggleOutput");
btnToggle.onclick = function(){
    if (toggleStatus.innerText == "OFF"){
        toggleStatus.innerText = "ON";
    }
    else{
        toggleStatus.innerText = "OFF"
    }
}
btnToggle2.onclick = function(){
    if (btnToggle2.innerText === "OFF"){
        btnToggle2.innerText = "ON";
    }
    else{
        btnToggle2.innerText = "OFF";
    }
}

//Exercise 3
const btnChangeBG = document.getElementById("btnChangeBG");
const btnResetBG = document.getElementById("btnResetBG");
const ex3 = document.getElementById("Ex3");

btnChangeBG.onclick = function() {
    document.querySelectorAll(".card").forEach(card =>{
        card.style.backgroundColor ="lightblue";
    });
    ex3.style.backgroundColor = "lightgreen";
}
btnResetBG.onclick = function() {
    document.querySelectorAll(".card").forEach(card =>{
        card.style.backgroundColor ="white";
    });
    ex3.style.backgroundColor = "white";
}

//Exercise 4
const btnMinus = document.getElementById("btnMinus");
const btnPlus = document.getElementById("btnPlus");
const btnResetCounter = document.getElementById("btnResetCounter");
const counter = document.getElementById("count");
let count = 0;

btnMinus.onclick = function(){
    count = count-1;
    counter.innerText = count;
}

btnPlus.onclick = function(){
    count = count+1;
    counter.innerText = count;

}
btnResetCounter.onclick = function(){
    count = 0;
    counter.innerText = count;

}

//Exercise 5
const aInput = document.getElementById("aInput");
const bInput = document.getElementById("bInput");
const btnAdd = document.getElementById("btnAdd");
const sumResult = document.getElementById("sumResult");
let a = 0;
let b = 0;
let sum = 0;

btnAdd.onclick = function(){
    a = Number(aInput.value);
    b = Number(bInput.value);
    sum = a + b;
    sumResult.innerText = sum;
}

//Exercise 6
