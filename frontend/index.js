async function verify(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('state', document.getElementById('state').value);
    formData.append('city', document.getElementById('city').value)
    formData.append('time', document.getElementById('time').value)

    await fetch("https://localhost:5000/flask-link", {
        method: 'POST',
        body: formData
    }).then(response => response.text())
    .then(data => {
        if (data === "200") {
            alert("success");
        }
        else
        {
            alert("try again");
        }
    });
}