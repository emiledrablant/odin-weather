
import "./style.css"
const cityName = document.getElementById("city-name");
const cityContent = document.getElementById("city-content");
const cityField = document.getElementById("city-field");
const btnValidate = document.getElementById("validate-input");

async function getWeather(location) {
    const data = await fetchWeather(location);
    displayInformations(location, data);
}

async function fetchWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=C5EWCRR372R86ZHCG4F5S4SE4`, {mode: 'cors'});
        const data = await response.json();
        return {
            currentWeather: data.currentConditions.conditions,
            currentTime: data.currentConditions.datetime,
            currentTemp: data.currentConditions.temp
        }
    } catch (err) {
        return console.log("Something went wrong:", err.message);
    }
}

function displayInformations(location, data) {
    cityName.textContent = location;
    cityContent.textContent = `Current weather: ${data.currentWeather} with a temperature of ${data.currentTemp}. Informations logged at ${data.currentTime}.`;
}

btnValidate.addEventListener("click", () => {
    getWeather(cityField.value);
});