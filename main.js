// Variables:

const precioMetroCuadrado = 15;
let material= '';
let metrosCuadrados = 0;
let costoTotal = 0;

//Funcion:

function calcularCosto() {

    color = prompt("ingrese el color del mármol que desee (blanco o negro)");
    while(color !== 'blanco' && color !== 'negro') {
    color = prompt("ingrese el color (blanco o negro)")
    }

    metrosCuadrados = parseFloat(prompt("ingrese el tamaño del mármol que haya elegido(en m2)"));

    costoTotal= metrosCuadrados * precioMetroCuadrado;

    if (color === 'negro') {
        costoTotal= costoTotal * 1.5;
    }

    alert ("El costo total del marmol es: $" + costoTotal.toFixed(2));
}

calcularCosto()


