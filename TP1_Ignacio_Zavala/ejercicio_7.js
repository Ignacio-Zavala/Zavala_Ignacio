var valores = [true, false, 2, "hola", "mundo", 3, "char"];
//
var texto_Largo = "";
for (var i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "string" && valores[i].length > texto_Largo.length) {
        texto_Largo = valores[i];
    }
}
console.log("El texto más largo es:", texto_Largo);

var textoListo = [];
for (var i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "string") {
        textoListo.push(valores[i]);
    }
}
textoListo.sort(function(a, b) {
    return a.length - b.length;
});
console.log("Texto ordenado por longitud:", textoListo);

var numeros = valores.filter(function(valor) {
    return typeof valor === "number";
});
var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicación:", multiplicacion);
console.log("División:", division);