//
let dato, resultado;
//Se declara las variables con los nombres dato y resultado.
val1 = window.prompt("Introduce tu nombre", "...");
//Se utiliza val1 para almacenar el dato que introduce el usuario con su nombre en un cuadro de chat mostrado através de la función windows.prompt
val2 = window.prompt("Introduce tu apellido", "...");
////Se utiliza val1 para almacenar el dato que introduce el usuario con su apellido en un cuadro de chat mostrado através de la función windows.prompt
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
//Se almacena en la variable resultado su nombre y apellido
document.write(resultado);
//Se ejecuta la función document.write mostrando el resultado de los datos guardados