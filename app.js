const cityInput = document.getElementById('searchbar');
const foundCard = document.querySelector('found');
const notFoundCard = document.getElementById('notFound');
const searchBtn = document.getElementById('searchBtn');
const apiKey = 'b6c59e30d0fa342cfecb3bbe30583a30';


searchBtn.addEventListener('click', event=>{
    const city = cityInput.value;


    if(city == ''){
        return;
    }
    else{
        getWeatherDetails(city);
    }


})

async function getWeatherDetails(city){
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}'

    const response = await fetch(apiUrl);
    console.log(response);
    
}