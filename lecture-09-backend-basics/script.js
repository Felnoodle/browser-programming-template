function getMessage() {
  fetch("http://localhost:3000/api/message")
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").innerText = data.message;
    })
    .catch(error => {
      console.error("Error:", error);
    });
}