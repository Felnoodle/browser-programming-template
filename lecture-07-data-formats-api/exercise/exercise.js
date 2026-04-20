// Get references to UI elements
const output = document.getElementById("output");
const statusText = document.getElementById("status");

// Helper function to print text
function log(message) {
    output.textContent += message + "\n";
}

// Helper function to clear output
function clearOutput() {
    output.textContent = "";
}

// Helper function to update status
function setStatus(text) {
    statusText.textContent = "Status: " + text;
}

/* ==========================================================
   1) ASYNC TIMEOUT
   ========================================================== */

// This demonstrates that JavaScript does NOT wait.
// setTimeout schedules a task for later.
document.getElementById("btnTimeout").onclick = function () {

    clearOutput();
    log("Start");

    // This does NOT block the program.
    // It tells the browser: "Run this after 2 seconds"
    setTimeout(function () {
        log("Timeout finished after 0.5 seconds");
    }, 500);

    log("End");
};
//Start and End write instantly
//Timeout after 0.5s, program is not blocked during timeout

/* ==========================================================
   2) ASYNC PROMISE
   ========================================================== */

// A Promise represents a value that will arrive in the future.
function waitOneSecond() {

    // We create and return a Promise object.
    return new Promise(function (resolve) {

        // After 1 second, resolve the Promise.
        setTimeout(function () {
            resolve("Promise resolved after 2 seconds!");
        }, 2000);
    });
}

document.getElementById("btnPromise").onclick = function () {

    clearOutput();
    setStatus("Waiting (Promise)...");

    // .then() runs AFTER the Promise is completed.
    waitOneSecond().then(function (result) {
        log(result);
        setStatus("Idle");
    });
};

/* ==========================================================
   3) ASYNC / AWAIT
   ========================================================== */

// async/await is a modern way to work with Promises.
// It makes asynchronous code look more readable.

async function runAwaitExample() {

    clearOutput();
    setStatus("Waiting (await)...");

    // 'await' pauses this function until the Promise resolves.
    // It does NOT freeze the browser.
    log("before await");
    const result = await waitOneSecond();
    log("after await");

    log(result);
    setStatus("Idle");
}

document.getElementById("btnAwait").onclick = runAwaitExample;
//Order in log: before await, after await, Promise resolved after 2 seconds
//Await is getting the result of promise

/* ==========================================================
   4) ASYNC FETCH (REAL WORLD)
   ========================================================== */

// Fetch is used to get data from the internet (API).
// It returns a Promise.

async function runFetchExample() {

    clearOutput();
    setStatus("Loading from API...");

    try {

        // Send request to server
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/999999"
        );

        // Check if HTTP status is OK (200–299)
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        // Convert response body to JSON (this is also async!)
        const data = await response.json();

        log("ID: " + data.id);
        log("Title: " + data.title);

    } catch (error) {

        // This runs if network fails or we throw manually
        log("Error: " + error.message);

    } finally {

        // finally always runs (success or error)
        setStatus("Idle");
    }
}
document.getElementById("btnFetch").onclick = runFetchExample;
//Error: HTTP Error: 404
//response.ok logs the 404 error which then thrown into catch block



//Why do we use async/await?
//1) It makes code more readable and easier to understand.
//2) It allows us to write asynchronous code that looks like synchronous code.
//3) It helps to avoid "callback hell" and makes error handling easier.

//Why do we use try/catch with fetch?
//1) To handle network errors (e.g., no internet connection).
//2) To handle HTTP errors (e.g., 404 Not Found, 500 Internal Server Error).
//3) To catch any other unexpected errors that may occur during the fetch process.

//Why do we check response.ok?
//1) Because fetch does not throw an error for HTTP errors (like 404 or 500).
//2) response.ok is a boolean that indicates if the HTTP status code is in the range 200–299.
//3) If response.ok is false, we can throw an error to be caught in the catch block.