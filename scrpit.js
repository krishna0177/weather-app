const inputSearch = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const temprature = document.querySelector('.temprature');
const Description = document.querySelector('.Description');
const humidity = document.querySelector('#humidity');
const windSpeed = document.querySelector('#wind-speed');
const weatherImage = document.querySelector('#weitherimg')
const error = document.querySelector('#not-result');


async function checkweather(city){
     const API_Key = '571c7bdf9e7b62b542c6bfc7ef043061'
     const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`
     const WeatherData = await fetch(`${url}`).then(response => response.json());
     temprature.innerHTML = `${Math.round(WeatherData.main.temp-273.15)}°C`;
     Description.innerHTML = `${WeatherData.weather[0].description}`;
     humidity.innerHTML = `${WeatherData.main.humidity}%`;
     windSpeed.innerHTML= `${WeatherData.wind.speed}Km/H`;


     switch(WeatherData.weather[0].main){
          case 'Clouds':
               weatherImage.src = 'cloud.webp';
               break;
          case 'Clear':
               weatherImage.src = 'Weather-No-Background.png';
               break;
          case 'Rain':
               weatherImage.src = 'rain.png';
               break;
          case 'Snow':
               weatherImage.src = '1024px-Weather-snow.svg.png';

     }

     if(WeatherData.cod === `404`){
          error.innerHTML = 'Result not found';
          return;
     }



     
     console.log(WeatherData);
}



// searchBtn.addEventListener("click", ()=>{
//      checkweather(inputSearch.value)
// })
// const inputSearch = document.querySelector('.input-box');
// const searchBtn = document.querySelector('#searchBtn');
// const temprature = document.querySelector('.temprature');
// const Description = document.querySelector('.Description');
// const humidity = document.querySelector('#humidity');
// const windSpeed = document.querySelector('#wind-speed');
// const weatherImage = document.querySelector('#weitherimg')
// const error = document.querySelector('#not-result');



