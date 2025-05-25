const myTown = document.querySelector('#town');
const myDesc = document.querySelector('#description');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const highTemp = document.querySelector('#high-temp');
const lowTemp = document.querySelector('#low-temp');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

const forecastContainer = document.querySelector('#forecast-days');

const myKey = "eb6ecc77be33fcafe663f61da64e45d5"
const myLat = 32.5323;
const myLong = -117.01706;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}`
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try{
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);

    } else {
        throw Error(await response.text());
    }

    } catch (error){
        console.log(error);
    }
}


async function getForecast() {
    try{
        const response = await fetch(forecastUrl);
        if (response.ok){
            const data = await response.json();
            displayForecast(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.error('Forecast error:', error);
    }
}

function displayForecast(data){
    const forecastList = data.list;

    const daysShown = [];
    for (let i = 0; i <forecastList.length && daysShown.length <3; i++){
        const forecast = forecastList[i];
        const date = new Date(forecast.dt * 1000);
        const day = date.toLocaleDateString(undefined, {weekday: 'long'});

        if (!daysShown.includes(day)){
            daysShown.push(day);

            const iconUrl = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
            const temp = `${forecast.main.temp.toFixed(0)}°F`;
            const desc = forecast.weather[0].description;

            const card = document.createElement('div');
            card.innerHTML= `
            <h3>${day}</h3>
            <p>${desc}</p>
            <p>${temp}</p>
            `;
            forecastContainer.appendChild(card);
        }
    }
}

function displayResults(data) {
    console.log('hello')
    myTown.innerHTML = data.name
    myDesc.innerHTML = data.weather[0].description
    currentTemp.innerHTML= `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute('SRC', iconsrc)
    weatherIcon.setAttribute('alt', data.weather[0].description)

    highTemp.innerHTML =  `High: ${data.main.temp_max}&deg;F`;
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&deg;F`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);

    sunrise.innerHTML = sunriseTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' });
    sunset.innerHTML = sunsetTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit' });
}

apiFetch();
getForecast();

