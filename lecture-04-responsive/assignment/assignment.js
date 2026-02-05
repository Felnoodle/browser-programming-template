/* =========================================================
   STUDENT TODO VERSION (Exercises 9–16)
   Rules:
   - Do NOT change HTML ids
   - Fill only TODO parts
   - Test in browser + console
   ========================================================= */

/* =========================
   Exercise 9 — Grade
   TODO:
   1) Read score from input
   2) Use if / else if / else
   3) Show Grade: A/B/C/D/F
   ========================= */
const scoreInput = document.getElementById("scoreInput");
const btnGrade = document.getElementById("btnGrade");
const gradeOut = document.getElementById("gradeOut");


btnGrade.onclick = function () {
  // TODO: get score as number
  // const score = ...
    let grade = "";
    const score = scoreInput.value;
        if (score < 0 || score > 100) {
            grade = "Grade: Invalid score";
        } else if (score >= 90) {
            grade = "Grade: A";
        } else if (score >= 80) {
            grade = "Grade: B";
        } else if (score >= 70) {
            grade = "Grade: C";
        } else if (score >= 60) {
            grade = "Grade: D";
        } else {
            grade = "Grade: F";
        }
        gradeOut.innerText = grade;
};

/* =========================
   Exercise 10 — Even / Odd
   TODO:
   1) Complete isEven( n )
   2) Use it in button click
   ========================= */
const numEvenOdd = document.getElementById("numEvenOdd");
const btnEvenOdd = document.getElementById("btnEvenOdd");
const evenOddOut = document.getElementById("evenOddOut");

function isEven( n ) {
  return n % 2 === 0; //Even=true
}

btnEvenOdd.onclick = function () {
  const n = Number(numEvenOdd.value);
    if (isEven(n)) {
        evenOddOut.innerText = "Result: Even";
    } else {
        evenOddOut.innerText = "Result: Odd";
    }
};

/* =========================
   Exercise 11 — Countdown
   TODO:
   1) Build a string using a for loop
   2) Count down from start to 0
   ========================= */
const countdownInput = document.getElementById("countdownInput");
const btnCountdown = document.getElementById("btnCountdown");
const countdownOut = document.getElementById("countdownOut");

btnCountdown.onclick = function () {
  const start = Number(countdownInput.value);
    let text = "Countdown: ";
    for (let i = start; i >= 0; i--) {
        text += i + " ";
    }

  countdownOut.innerText = text;
};

/* =========================
   Exercise 12 — Sum 1..N
   TODO:
   1) Complete sumToN( n )
   2) Use it in button click
   ========================= */
const nSumInput = document.getElementById("nSumInput");
const btnSumN = document.getElementById("btnSumN");
const sumNOut = document.getElementById("sumNOut");

function sumToN( n ) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

  return sum;
}

btnSumN.onclick = function () {
  const n = Number(nSumInput.value);
  sumNOut.innerText = "Sum: " + sumToN(n);

};

/* =========================
   Exercise 13 — Repeat Text N Times
   TODO:
   1) Use a loop to repeat
   2) Build one long string result
   ========================= */
const repeatText = document.getElementById("repeatText");
const repeatCount = document.getElementById("repeatCount");
const btnRepeat = document.getElementById("btnRepeat");
const repeatOut = document.getElementById("repeatOut");

btnRepeat.onclick = function () {
  const text = repeatText.value;
  const times = Number(repeatCount.value);

  let result = "";
  for (let i = 1; i <= times; i++) {
      result += text;
  }
  repeatOut.innerText = result;
};

/* =========================
   Exercise 14 — Simple Login
   TODO:
   1) Read username/password
   2) Compare with correctUser/correctPass
   3) Show green success / red fail
   ========================= */
const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const btnLogin = document.getElementById("btnLogin");
const loginOut = document.getElementById("loginOut");

// Students can change these:
const correctUser = "student";
const correctPass = "1234";

btnLogin.onclick = function () {
  const u = loginUser.value;
  const p = loginPass.value;

  if (u === correctUser && p === correctPass) {
      loginOut.innerText = "Status: Welcome ✅";
  } else {
      loginOut.innerText = "Status: Error ❌";
  }

};

/* =========================
   Exercise 15 — Min / Max of 3
   TODO:
   1) Complete min3 and max3 using if
   2) Show "Min: X | Max: Y"
   ========================= */
const xInput = document.getElementById("x");
const yInput = document.getElementById("y");
const zInput = document.getElementById("z");
const btnMinMax = document.getElementById("btnMinMax");
const minMaxOut = document.getElementById("minMaxOut");

function min3(a, b, c) {
  let min = a
  if (b < min) min = b;
  if (c < min) min = c;
  return min;
}

function max3(a, b, c) {
    let max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    return max;
}

btnMinMax.onclick = function () {
  const a = Number(xInput.value);
  const b = Number(yInput.value);
  const c = Number(zInput.value);

  minMaxOut.innerText = "Min: "+ min3(a, b, c) + " | Max: " + max3(a, b, c);
};

/* =========================
   Exercise 16 — Multiplication Table
   TODO:
   1) Complete makeTable( n )
   2) Use a loop 1..10
   3) Return one string
   ========================= */
const tableN = document.getElementById("tableN");
const btnTable = document.getElementById("btnTable");
const tableOut = document.getElementById("tableOut");

function makeTable( n ) {
    let text = "| ";
    for (let i = 1; i <= 10; i++) {
        text += n + " × " + i + " = " + n * i + " | ";
    }
  return text;
}

btnTable.onclick = function () {
  const n = Number(tableN.value);

  tableOut.innerText = makeTable(n);
};