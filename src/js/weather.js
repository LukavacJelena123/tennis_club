import axios from 'axios';
import $ from 'jquery';

let temp;
let weather = axios({
        method:'get',
        url:'https://community-open-weather-map.p.rapidapi.com/weather?callback=json&units=%22metric%22&q=belgrade%2Crs',
        headers: {
            "Content-Type": "application/json",
              "X-RapidAPI-Host":"community-open-weather-map.p.rapidapi.com",
              "X-RapidAPI-Key": "98075801cfmshc26ffe05a637f8bp1a424ajsnb2f5189adc53"
        }
      })
        .then(function (response) {
            let resp = `${response.data.substring(5,response.data.length-1)}`;
            temp = JSON.parse(resp);
        });

function temperatureConverter(valNumber) {
        const valNum = parseFloat(valNumber);
        return (valNum- 273.15).toFixed();
  }

function displayWeather(){
    let min = temperatureConverter(`${temp.main.temp_min}`);
    let max = temperatureConverter(`${temp.main.temp_max}`);
    let curr = temperatureConverter(`${temp.main.temp}`);
    let wind = (`${temp.wind.speed}`*1.609).toFixed(1);
    $(`#toggle`).off("click");
    $(`#weatherComlete`).append(` <div>
        <hr>
        <p class="weatherCity">${temp.name}</p>
        <div class="sprite sprite-${temp.weather[0].icon}"></div>
        <p class="weatherDescriptionTemp">${curr}&deg;C</p>
        <p class="weatherDescription">${temp.weather[0].description}</p>
        <p class="weatherDescription">min ${min} &deg;C / max ${max} &deg;C</p>
        <p class="weatherDescription">wind: ${wind} km/h</p>
        <p class="weatherDescription">pressure: ${temp.main.pressure}[hPa]</p>
        <p class="weatherDescription">humidity: ${temp.main.humidity}%</p>
   
    </div>`)  
}
        
export {displayWeather,temperatureConverter}
