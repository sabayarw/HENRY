// OPERADORES DE COMPARACION: devuelven un valor booleano en vez de numerico para indicar si la operacion es V o F
// > < >= >= ==(igual) !=(diferente)
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

// = es un operadores de asignación
// == y === operadores de igualdad
// === igualdad estricta. Verifica que se cumpla el tipo de dato y el valor del mismo
// == verifica solo si el valor es el mismo
console.log(3 === "3");
console.log(3 == "3");

//Asociatividad: 

// suma:De derecha a izq
var a = 1; 
var b = 2;
var c = (a = b);
console.log (a); //2
console.log (b); //2 
console.log (c); //2

// division: de izq a derech
console.log(16/2/4);


