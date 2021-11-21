async function verify(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('state',document.getElementById('state').value)
    formData.append('city',document.getElementById('city').value)

    await fetch("http://localhost:5000/verify", {
        method: 'POST',
        body: formData 
    }).then(response => response.json())
    .then(data => {
        if (data != null) {
            document.getElementById('state').value = "";
            document.getElementById('city').value = "";
            AppendData(data);
        } else {
            alert("try again")
        }
    });
}

function AppendData(weather_data) {
    let weather_report = document.getElementById("report_content")
    weather_report.innerHTML = weather_data[0]["detailedForecast"]
    document.getElementById("report_container").classList.add("card")
}

function AppendIcon(weather_data) {
    weather_icon = document.getElementById("weather_icon")
    weather_icon.setAttribute("src", weather_data[0]["icon"])
}
