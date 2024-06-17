function calcularPromedio() {
    let notas = [];
    for (let i = 0; i < 5; i++) {
        let nota = parseInt(prompt(`Ingrese la nota ${i + 1}:`));
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Ingrese una nota válida (0 a 10):"));
        }
        notas.push(nota);
    }

    let promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    if (promedio < 5) {
        alert("Reprobado");
    } else if (promedio >= 6 && promedio <= 8) {
        alert("Aprobado");
    } else {
        alert("Sobresaliente");
    }
}

calcularPromedio();