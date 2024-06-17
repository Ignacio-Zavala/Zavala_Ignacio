//Crear el archivo “ejercicio_6.js”. Declarar un array llamado “meses” y que tenga guardado los meses
//del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este le devolverá el
//nombre del mes. Por ejemplo, escribir un 5 debe devolver el mes mayo

 const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
];

var numero = window.prompt("Ingresar un número del 1 al 12")
if (numero >= 1 && numero <= 12) {
    var mesNombre = meses[numero - 1];
    alert("El mes correspondiente al número " + numero + " es: " + mesNombre );
} else {
    alert("El número ingresado no está en el rango válido (1 al 12).");
}