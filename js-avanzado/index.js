
        const tarjeta = document.getElementById('card');

async function ConsultarCiudad() {
    let ciudad = document.getElementById('selector-ciudad').value;
    if (ciudad != '') {
        const api_id = 'a49f2089297d7216a6e25354544789ce';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${api_id}&units=metric&lang=es`;
        //console.log(url)
        try {
            const response = await fetch(url);
            // console.log(response);
            if (response.ok) {
                const data = await response.json()
                mostrarCard(data)
            }
        }
        catch (err) {
            tarjeta.innerHTML = 'hubo un error en la consulta' + err;

        }

    } else {
        alert('Seleccione una ciudad')
    }
}

function mostrarCard(data) {
    const { name, sys: { country }, wind: { speed }, main: { temp, feel_like, humidity, pressure },weather:[arr]} = data;
    tarjeta.innerHTML = `
            <h3>${data.name}</h3>
            // <img src="http://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="">
            `;
}

