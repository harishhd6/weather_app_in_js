
function findWeatherReport(){
    var city = document.getElementById("searchCity").value;
    var apikey = "9f86545c07045c3dbaa98ad60482aa5f";
    var apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid="+apikey+"&q="+city;
    weatherApicall(apiurl);
}

async function weatherApicall(apiurl){
    var response = await fetch(apiurl);
    var data = await response.json();
    var weather_icon = document.querySelector(".weather-icon");
    if(data.cod == 200)
    {
        document.querySelector(".degree").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity-value").innerHTML = data.main.humidity + "%";
        document.querySelector(".windspeed-value").innerHTML = data.wind.speed + "km/h";
        var climate = data.weather[0].main;
        if(climate == "Mist")
        {
            weather_icon.src = "images/weather_icons/fog.png"; 
        }
        else if(climate == "Clouds")
        {
            weather_icon.src = "images/weather_icons/cloudy.png"; 
        }
        else if(climate == "Rain")
        {
            weather_icon.src = "images/weather_icons/raining.png"; 
        }
        else if(climate == "Drizzle")
        {
            weather_icon.src = "images/weather_icons/drizzle.png"; 
        }else if(climate == "Snow")
        {
            weather_icon.src = "images/weather_icons/snow.png"; 
        }
        else{
            weather_icon.src = "images/weather_icons/sun.png";
        } 

        document.querySelector(".weather-container").style.display = "block";
        document.querySelector(".error-container").style.display = "none";
    }
    else{
        document.querySelector(".weather-container").style.display = "none";
        document.querySelector(".error-container").style.display = "block";
    }
}