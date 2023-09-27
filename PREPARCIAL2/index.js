function calculatePrice() {
    var numero = parseInt(document.getElementById("numeroInput").value);

    if (numero >= 1 && numero <= 10) {
        const capacidad = document.getElementById("Capacidad");
        const capacidadSeleccionada = capacidad.value;
        const color = document.getElementById("color");
        const colorSeleccionado = color.value;
        var precio = 0;
        if (colorSeleccionado === "0")
        {
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