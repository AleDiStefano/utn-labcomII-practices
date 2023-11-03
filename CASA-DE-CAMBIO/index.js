function calcular() {
    let pesos = document.getElementById('pesos').value;
    let divisa = document.getElementById('divisa').value;

    if ((pesos == 0) || divisa == 0) {
        alert("Por favor, complete todos los campos para realizar el calculo");
    } else if (pesos < 1) {
        alert("Por favor, ingrese una cantidad de pesos válida para realizar el calculo");
    } else {
        let cotizacion = parseInt(pesos / divisa);
        let resultado = document.getElementById('result');
        resultado.innerHTML = `La cantidad de unidades que usted podrá comprar es: ${cotizacion}`
    }
}

function nueva_divisa() {
    let divisa_nombre = document.getElementById('divisa_nombre').value;
    let valor_divisa = document.getElementById('valor_divisa').value;

    if ((divisa_nombre == '') || valor_divisa == 0) {
        alert("Por favor, complete todos los campos para realizar el alta de la moneda");
    } else if (valor_divisa < 1) {
        alert("Por favor, ingrese una cotización de pesos válida para realizar el calculo");
    } else {
        let select = document.getElementById("divisa");
        let option = document.createElement("option");
        option.value = valor_divisa;
        option.text = divisa_nombre;
        select.appendChild(option);
    }
}