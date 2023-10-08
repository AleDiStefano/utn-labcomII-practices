function calculatePrice() {
    var numero = parseInt(document.getElementById("numeroInput").value);

    if (numero >= 1 && numero <= 10) {
        const capacidad = document.getElementById("Capacidad");
        const capacidadSeleccionada = capacidad.value;
        const color = document.getElementById("color");
        const colorSeleccionado = color.value;
        var precio = 0;
        if (colorSeleccionado === "0") {
            alert("Por favor seleccione un color")
        } else {
            switch (capacidadSeleccionada) {
                case "128":
                    precio = 150000 * numero;
                case "256":
                    precio = 165000 * numero;
                case "512":
                    precio = 180000 * numero;
            }
            if (precio == 0) {
                document.getElementById("resultado").textContent = `No seleccionó ninguna capacidad`;
            }
            else {
                document.getElementById("resultado").textContent = `El precio es ${precio}`
            }
        }
    } else {
        alert("El número está fuera del rango correcto.");
        document.getElementById("numeroInput").textContent = 0
    }
}

function changeProductImage() {
    let color = document.getElementById('color').value;
    let imagen = document.getElementById('imagen')

    switch (color) {
        case "grafito":
            imagen.setAttribute('src','media/grafito.jpg');
            break;
        case "sierra":
            imagen.setAttribute('src','media/sierra.jpg');
            break;
        case "silver":
            imagen.setAttribute('src','media/silver.jpg');
            break;
        case "gold":
            imagen.setAttribute('src','media/gold.jfif');
            break;
    }
}