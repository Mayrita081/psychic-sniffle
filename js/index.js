/* comentarios en js */

/* Variables en JS, se guardan en la ram */

//Declaro una variable, le asigno un espacio
let nombre;
let edad = 25;
var apellido;

//declaracion de variables correctas
let $provincia = "Mendoza";
let _pais = "Argentina";

//let 1234 = "America"; no se puede declarar una variable com nombre numerico
//let -empleado = "HOLA"; no se puede iniciar una variable con -

let nombreEmpresaSuper = "camelCase";


//Decralacion Y asignacion de una variable
const DNI = 45266858;

//Otras variables en JS: Boleanos
let falso = false;
let verdadero = true;


//Asigracion de un valor a una variable ya creada (Se pueden usar los dos tipos de comilas)
nombre = "Mayra";
apellido = "Cueto";

let pais = "Argentina";

console.log("Mi nombre es " + nombre + " y vivo en " + pais + ". " + "Mi DNI es " + DNI);

//Array - Vectores

let manzana = "Manzana";
let pera = "Pera";

let calificacion1 = 10;
let calificacion2 = 8;

let frutas = ['Manzana', 'Pera', 'Ciruela', 'Banana','Naranja'];
let calificaciones = [10, 8, 7, 6, 5, 10];

//Acceso a los arrays
console.log(frutas);
console.log(calificaciones);

//Metodos de los arrays 
frutas.push ('Pomelo');//Agrega elementos al array
frutas.push ('Sandia');
frutas.push ('Tomate');

console.log(frutas); 

//Acceso al DOM
document.write(`
        <h1>Frutas: ${frutas[0]} </h1>
        `);
document.write(`
        <h2>=============================================================</h2>
`);

//bucles for

    for(let num = 0; num < frutas.length; num ++){
        document.write(`
        <h1>Frutas: ${frutas[num]} </h1>
        `);
    };

    