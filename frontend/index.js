async function verify(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('state',document.getElementById('state').value)
    formData.append('city',document.getElementById('city').value)

    await fetch("http://localhost:5000/verify", {
        method: 'POST',
        body: formData 
    }).then(response => response.text())
    .then(data => {
        if (data != null) {
            alert("success");
            console.log(data);
            document.getElementById('state').value = "";
            document.getElementById('city').value = "";
            AppendData(data);
        } else {
            alert("try again")
        }
    });
}

function AppendData(weather_data) {
    weather_report = document.getElementById("report_content")
    weather_report.innerHTML = weather_data[0]["detailedForecast"]
}