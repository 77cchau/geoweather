async function verify(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('state',document.getElementById('state').value);
    formData.append('city',document.getElementById('city').value);

    await fetch("https://zothacks21-geoweather.herokuapp.com/verify", {
        method: 'POST',
        body: formData 
    }).then(response => response.json())
    .then(data => {
        if (data != null) {
            document.getElementById('state').value = "";
            document.getElementById('city').value = "";
            console.log(data);
            if (5 > data.length){
                let i = data.length;
            }else{
                let i = 5;
            }

            for (let i = 0; i < 5; i++)
            {
                AppendData(data, i);
                AppendIcon(data, i);
            }
        } else {
            alert("try again")
        }
    });
}

function AppendData(weather_data, i) {
    let weather_report = document.getElementById(`report_content${i+1}`);
    let weather_title = document.getElementById(`report_title${i+1}`);
    weather_report.innerHTML = weather_data[i]["detailedForecast"];
    weather_title.innerHTML = weather_data[i]["name"]
    document.getElementById(`report_container${i+1}`).classList.add("card");
}

function getIcon(weather) {
    let icons = {"Sunny": "https://img.icons8.com/small/64/000000/sun.png",
                 "Cloudy": "https://img.icons8.com/small/64/000000/cloud.png",
                 "Snow": "https://img.icons8.com/small/64/000000/snow.png",
                 "Rain": "https://img.icons8.com/small/64/000000/rain.png",
                 "Thunder": "https://img.icons8.com/small/64/000000/cloud-lighting.png"
                };
    if (weather.includes("Sunny") || weather.includes("Clear"))
    {
        return icons["Sunny"];
    }
    else if (weather.includes("Rain"))
    {
        return icons["Rain"];
    }
    else if (weather.includes("Snow"))
    {
        return icons["Snow"];
    }
    else if (weather.includes("Cloudy"))
    {
        return icons["Cloudy"];
    }
    else if (weather.includes("Thunderstorms"))
    {
        return icons["Thunder"];
    }
    else{
        return "";
    }
}

function AppendIcon(weather_data, i) {
    let weather_icon = document.getElementById(`weather_icon${i+1}`);

    let weather = weather_data[i]["shortForecast"];
    weather_icon.src = getIcon(weather);
}
