function Calcular() {
    let nro1 = document.getElementById('primer_nro').value;
    let nro2 = document.getElementById('segundo_nro').value;
    let nro3 = document.getElementById('tercer_nro').value;
    if ((nro1 > nro2) && (nro1 > nro3)){
        alert('El primer nro es el mayor: ',nro1);
    } else if (nro2 > nro3)
    {
        alert('El segundo nro es el mayor: ',nro2);
    } else 
    {
        alert('El tercer nro es el mayor: ',nro3);
    }    
}

function NegativoPositivo() {
    let nro = document.getElementById('negativo_positivo').value;
    if (nro > 0){
        alert(`El Numero ${nro} es positivo`)
    }else if (nro < 0){
        alert(`El Numero ${nro} es negativo`)       
    } else{
        alert(`El Numero ${nro} es neutro`)
    }
}

function CalcularNivel(){
    let nombre = document.getElementById('nombre').value;
    let cant_preguntas = document.getElementById('cant_preg').value;
    let cant_respuestas  = document.getElementById('cant_respuestas').value;
    let promedio = (cant_respuestas / cant_preguntas) * 100
    if (promedio >=90){
        alert(`El alumno ${nombre} califica para el Nivel superior`)
    }else if (promedio >=75){
        alert(`El alumno ${nombre} califica para el Nivel medio`)
    }else if (promedio >=50){
        alert(`El alumno ${nombre} califica para el Nivel regular`)
    }else{
        alert(`El alumno ${nombre} esta fuera de nivel`)
    }
}
