
import "./style.css"

async function fetchWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=C5EWCRR372R86ZHCG4F5S4SE4`, {mode: 'cors'});
    return await response.json();
}

console.log(fetchWeather("Cayenne"));
