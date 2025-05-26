
async function fetchWeather() {
    try {
        const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=b23067e7cb324f18969100951252105&q=Pretoria&days=7&aqi=no&alerts=no');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Extract necessary parts
        const forecast = data.forecast.forecastday[0];
        const current = data.current;

        // Build HTML row
        console.log('Hello world');
        const row = `
    <tr>
        <td>${forecast.date}</td>
        <td>${forecast.day.maxtemp_c}°C</td>
        <td>${forecast.day.mintemp_c}°C</td>
        <td>
        <img src="${current.condition.icon}" alt="${current.condition.text}" />
        ${current.condition.text}, ${current.temp_c}°C
        </td>
    </tr>
    `;

        document.getElementById("weatherTableBody").innerHTML = row;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weatherTableBody").innerHTML = `<tr><td colspan="4">Failed to load weather data.</td></tr>`;
    }
}

// Call the function on load
fetchWeather();

