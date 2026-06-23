const latitude = 19.4326;
const longitude = -99.1332;

const url =
`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;

fetch(url)
.then(response => response.json())
.then(data => {

    document.getElementById("temperature").textContent =
        data.current.temperature_2m + "°C";

    document.getElementById("wind").textContent =
        data.current.wind_speed_10m + " km/h";
})
.catch(error => console.log(error));