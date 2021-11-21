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

        } else {
            alert("try again")
        }
    });
}