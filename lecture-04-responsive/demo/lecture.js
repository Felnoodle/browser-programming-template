"use strict";

// 1) Quick connection test (open DevTools Console)
console.log("JS connected ✅");

// 2) Demo 1: Button -> change text + style
const btnHello = document.getElementById("btnHello");
const output = document.getElementById("output");

btnHello.onclick = function () {
  output.innerText = "Hello from JavaScript!";
  output.style.color = "green";
  output.style.fontWeight = "bold";
};

// 3) Demo 2: Counter (+1 / -1)
let count = 0;

const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const counterValue = document.getElementById("counterValue");

function renderCount() {
  counterValue.innerText = count;
}

btnPlus.onclick = function () {
  count = count + 1;
  renderCount();
};

btnMinus.onclick = function () {
  count = count - 1;
  renderCount();
};

// Initial render
renderCount();