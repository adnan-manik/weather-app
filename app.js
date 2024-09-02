const cityInput = document.getElementById('searchbar');
const foundCard = document.querySelector('.found');
const notFoundCard = document.querySelector('.notFound');
const searchBtn = document.getElementById('searchBtn');
const apiKey = 'b6c59e30d0fa342cfecb3bbe30583a30';


searchBtn.addEventListener('click', async event => {
    const city = cityInput.value;


    if (city) {
        try {
            const weatherData = await getWeatherData(city);
            displayWeatherData(weatherData);
        }
        catch (error) {
            console.error(error);
            displayError(error);
        }
    }
    else {
        return;

    }


})

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new error("Couldn't fetch weather data");
    }
    else {
        return await response.json();
    }

}

function displayWeatherData(data) {

    const location = document.getElementById('location');
    const weatherIcon = document.getElementById('weatherIcon');
    const temperature = document.getElementById('temperature');
    const desc = document.getElementById('description');
    const humidityTag = document.getElementById('humidity');
    const pressureTag = document.getElementById('pressure');

//mapping data

    const { name: city,
            main: { temp, humidity, pressure },
            weather: [{ description, id, icon }],
            sys: {country} }= data;


//styling 

    notFoundCard.classList.remove('fade-In');
    foundCard.classList.add('fade-In');
    location.textContent = `${city}, ${country}`;
    temperature.textContent = (temp-273.15).toFixed(2);
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    desc.textContent = description;
    humidityTag.textContent = humidity;
    pressureTag.textContent = pressure;

    console.log(data);

}

function displayError(error) {
    
    foundCard.classList.remove('fade-In');
    notFoundCard.classList.add('fade-In');
    console.log(error);

}