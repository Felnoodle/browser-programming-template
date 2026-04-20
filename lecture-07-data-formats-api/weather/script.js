const cityText = document.getElementById("city")
const temperatureText = document.getElementById("temperature")
const windText = document.getElementById("wind")
const output = document.getElementById("output")
const timeText = document.getElementById("time")
const cityInput = document.getElementById("cityInput")
const latInput = document.getElementById("latInput")
const lonInput = document.getElementById("lonInput")
const inputBtn = document.getElementById("inputBtn")


function log(message) {
    output.textContent += message + "\n"
}

function clearOutput() {
    output.textContent = ""
}

async function loadWeatherByCity(city, lat, lon) {
    clearOutput()
    try {
        log("Loading weather data...")

        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true")
        if (!response.ok) {
            throw new Error("HTTP error: " + response.status)
        }
        const data = await response.json()

        log("Weather data loaded successfully!")
        temp = data.current_weather.temperature
        wind = data.current_weather.windspeed

        temperatureText.textContent = temp + "°C"
        windText.textContent = wind + " km/h"
        cityText.textContent = city
        timeText.textContent = new Date().toLocaleTimeString()

        console.log("Weather data loaded")
        console.log(data)
        console.log("Temperature: " + temp + "°C")
        console.log("Wind speed: " + wind + " km/h")
        console.log("City: " + cityText.textContent)

        if (temp < 0) {
            document.body.className = "cold" // cold blue
        } else {
            document.body.className = "mild" // warm red
        }
    } catch (error) {
        log("Error loading weather data: " + error.message)
}
}


document.getElementById("Kuopio").onclick = () => loadWeatherByCity("Kuopio", 62.8924, 27.6770)
document.getElementById("Helsinki").onclick = () => loadWeatherByCity("Helsinki", 60.16997, 24.94)
document.getElementById("Oulu").onclick = () => loadWeatherByCity("Oulu", 65.0121, 25.4651)
document.getElementById("Kilpisjärvi").onclick = () => loadWeatherByCity("Kilpisjärvi", 69.0544, 20.7917)
inputBtn.onclick = () => {
    const city = cityInput.value || "Unknown"
    const lat = parseFloat(latInput.value)
    const lon = parseFloat(lonInput.value)
    loadWeatherByCity(city, lat, lon)
}