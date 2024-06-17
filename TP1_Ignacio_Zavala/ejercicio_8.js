let texto = prompt("Introduce un texto:");
let vocales = ['a', 'e', 'i', 'o', 'u'];
let posicion = -1;

for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
        posicion = i + 1;
        break;
    }
}

if (posicion !== -1) {
    console.log(`La primera vocal en el texto es "${texto[posicion - 1]}", en la posición Nº${posicion}`);
} else {
    console.log('No se encontraron vocales en el texto introducido.');
}