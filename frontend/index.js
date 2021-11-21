async function verify(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('state',document.getElementById('state').value);
    formData.append('city',document.getElementById('city').value);

    await fetch("http://localhost:5000/verify", {
        method: 'POST',
        body: formData 
    }).then(response => response.json())
    .then(data => {
        if (data != null) {
            document.getElementById('state').value = "";
            document.getElementById('city').value = "";
            console.log(data);
            AppendData(data);
            AppendIcon(data);
        } else {
            alert("try again")
        }
    });
}

function AppendData(weather_data) {
    let weather_report = document.getElementById("report_content");
    weather_report.innerHTML = weather_data[0]["detailedForecast"];
    document.getElementById("report_container").classList.add("card");
}

function getIcon(weather) {
    let icons = {"Sunny": "https://img.icons8.com/small/64/000000/sun.png",
                 "Cloudy": "https://img.icons8.com/small/64/000000/cloud.png",
                 "Snow": "https://img.icons8.com/small/64/000000/snow.png",
                 "Rain": "https://img.icons8.com/small/16/000000/rain.png"
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
    else{
        return "";
    }
}

function AppendIcon(weather_data) {
    let weather_icon = document.getElementById("weather_icon");

    let weather = weather_data[0]["shortForecast"];
    weather_icon.src = getIcon(weather);
}