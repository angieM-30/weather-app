let weather = {
    "apiKey": "64abc55e59789f117ea006b07717f6e9",
    fetchWeather: function( city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            +  "&units=metric&APPID="
            + this.apiKey
        ).then((response) => response.json())
        .then((data) =>this.displayWeather(data));
    },
    displayWeather:function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 
        "http://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather-div").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/forecast/?" + description +"')"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button")
.addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Bulan, Sorsogon");