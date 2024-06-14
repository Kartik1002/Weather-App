
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=661ae895d948935397955508b1873725&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weather = document.querySelector(".weather");
const error=document.querySelector(".error");       
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
async function checkWeather(city) {
    const resposne = await fetch(apiUrl + city);
    if (resposne.status == 404) {
        error.style.display = "block";
        weather.style.display = "none";
    }
    else {
        var data = await resposne.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".pressure").innerHTML = data.main.pressure + " inHg";
        document.querySelector(".visibility").innerHTML = data.visibility + " mi";
        
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        weather.style.display = "block";
        error.style.display = "none";
    }
}
