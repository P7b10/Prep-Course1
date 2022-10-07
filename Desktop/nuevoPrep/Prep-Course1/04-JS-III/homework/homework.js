// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // 
  //            [1, 2, 3]
  // posiciones: 0  1  2   array[0]---> nos devolveria el primer numero que es el 1.
  return array[0];
}

// otra forma --> return array.shift()

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  // .length --> nos devuelve la cantidad de elemento de algo...el largo del array.
  // hola.length --> 4 elementos. 
  // pq -1--> pq por ej [1, 2, 3] si ponemos solo array.length nos daria 3 elementos, que seria la longitud del array,
  //pero el ultimo elemento estaria en la posicion 2. y seria el elemento 3.
  
  return array[array.length-1];
}
// otra forma --> return array.pop()


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = []                       //creamos un nuevoArray, luego recorremos el array que nos dan
  for (var i = 0; i < array.length; i++){    // y a cada elemento de ese array le sumo 1 y lo agrego a mi
    nuevoArray[i] = array[i] +1;             //nuevoArray
  }  //nuevoArray.push(array[i] + 1)         // tenemos un array[1, 2, 3] y la idea es devolver uno nuevo
  return nuevoArray;                          // posicion array[0] es 1,-->  1 +1 es 2, entonces en la posicion 0 del 
}                                             //nuevoArray [2]
//otra forma sin crear una nueva variable     //luego, posicion array[1] es 2,-->2+1 es 3, entonces en la posicion 1 del 
//function incrementarPorUno(array){             //nuevoArray [2, 3] lo mismo para llegar al 4...
  
 /*             
//[1, 2, 3, 4, 8]
//
for (var i = 0; i< array.length; i++){        
// array[0]= 1 +1 -->2                        
// array[1]= 2 +1 -->3                             
// array[2]= 3 +1 -->4                        
array[i] = array [i] + 1;                   
}                                               
 return array                                  
  //[2,3,4]                                       
}
*/
//Ejemplo muy bueno
/* for (var i = 0; i < array.length; i++){
console.log(array)                            //para ver que viene por defecto en consola.
//nos da [10, 10, 16, 12]
console.log("el valor del array en ", array[i]) 
array[i]= array[i] + 1;
console.log ("el valor despues de guardar el cambio ", array[i])
}
return array;
// [11, 11, 17, 13]
}
*/

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  // [1, 2, 3, 4]
  // elemento = 15 ----> array.push(15)--=>[1, 2, 3, 4, 15]
  //primero donde queremos agragar, en este caso 'array'..luego el .push y que queremos agregar
array.push(elemento);  // .push agrega el elemento al fianl del array
return array;

}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);  //.unshift agrega el elemento al principio del array
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");   //el join: une las palabras y luego " " le agregamos el espacio.
}
console.log(dePalabrasAFrase(["Hello", "world!"])) //-->Hello world!

/*
var frase = palabra.join(" ")
return frase;
*/
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

// [1, 2, 3, 4, 5, 10]---> buscamos un elemento, ej: 3   iteramos hasta encontrarlo, si esta true, si no false.

for (let i = 0; i < array.length; i++){
  if(array[i] === elemento){         
    return true;                    
  }
}
return false;
}
//otra forma de hacer es: 
/*
return array.includes(lemento)
*/


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // el array es: numeros[15,  1,  2,  3]
  // valor va a ser:      15 + 1 + 2 + 3 = 21

var suma = 0;      //--> puede ser var resultado       
for (let i = 0; i < numeros.length; i++){   //0 = 0 + 15 suma = 0
  suma = suma + numeros[i];                //15 = 15 + 1   suma = 15
}                                       //16= 16 + 2     suma = 16
return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  //usamos la funcion anterior que suma todos los elementos 
   //y le pasamos la matriz por argumento que nos dan (resultadosTest)
  return agregarNumeros(resultadosTest) / resultadosTest.length; 
}                                                                
/* Otra forma de hacer es tal cual al ejercicio anterior y calcular la suma de los elementos
Luego quedaria dividir por la cantidad de elementos...(tener en cuenta definicion de promedio)

var suma = 0;
for (let i = 0; i < resultadosTest.length; i++){
  suma = suma + resusltadosTest[i]; 
}
return suma / resultadosTest.length;
}
*/

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // [10, 9, 8, 15, 27]

  var max = numeros[0];                   //supongo que mi primer valor, posicion 0, del array es el numero mas grande
  for (let i= 1; i<numeros.length; i++){    //recorro el array arrancando desde 1
    if(numeros[i]> max){                     //comparo cuando voy recorriendo con el num que supuse que era el mas grande
      max = numeros[i];                       //si se cumple el if lo igualo a max para luego retornarlo
    }
  }                                      
  return max;                             
}                                           
                                            
function multiplicarArgumentos() {          
// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
// Escribe tu código aquí:

if (arguments.length === 0) return 0;

var acc = 1;                                 //acc seria acumulador, empieza en 1 pq si empezamos con el 0 va a dar 0.
for (let i = 0; i < arguments.length; i ++){   //la consigna dice si se pasa un argumento, devuelvalo (entonces si  
  acc = acc * arguments[i];                    //se pasara solo 1, lo multiplicamos * 1)
}
return acc;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  // [1, 20, 25, 29...]
 //   i
var mayoresA18 = 0;                         //aca guardamos mientras iteramos (puede ir contador, acc..)
for (let i = 0; i < arreglo.length; i++){    // se le suma 1 por cada numero mayor a 18: ej:
  if(arreglo[i] > 18){                       //en la primer posicion [0]= 1..no es mayor a 18.
    mayoresA18 = mayoresA18 + 1;             // continuamos..posicion[1]= 20 es>18..ahora mayoresA18=1
    /* mayoresA18 += 1;                      // luego posicion[2]= 25 es >18..ahora mayoresA18 = 2...
    mayoresA18++; */
  }
}
return mayoresA18;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  // 1= domingo, 2=lunes, 3=martes, 4=miercoles, 5=jueves, 6=viernes; 7=sabado 
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";                 //tener en cuenta como nos pide que escribamos la frase
    }
    else{
      return "Es dia Laboral";                //tener en cuenta como nos pide que escribamos la frase
    }                                         //(ver cuando corremos el test si nos corrige) 
} 
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  /*var nStr = n.toString();        // si n = 25 --> .toString()--> n = "25"
  if(nStr[0] === "9"){          //tener en cuenta === "9" ; si ponemos == 9; estaria bien tamb. 
    return true
  }
  else {
    return false
  }

}
*/

var nStr = n.toString();
for (i = 0; i < nStr.length; i++){
  if(nStr[0] === "9") return true;
  }
  return false
  
}
 
  



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  

  //        [10, 25, 26, 45, 78] cantidad = 5
  //posicion  0  1   2    3   4 
  for (let i = 0; i < arreglo.length -1; i++){     //pq -1? como hay que compara, el -1 corta el bucle en el 45 q lo
    if(arreglo[i] === arreglo[i+1]){              // comparo con el 78
      return true;                                // i+1: para avanzar al siguiente y comparar.
    }                                             //si arrancamos en la posicion 0, la primer comparacion
  }                                               // seria posicion 0 y posicion 1. 
  return false;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
var newArray = []
for (let i = 0; i < array.length; i++){
  if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
    newArray.push(array[i]);                 //agregamos a mi nuevo array: newArray[]
  }                                       //primero "donde" en este caso newArray y luego .push y "que" queremos agregar
}                                         //en este caso los meses, array en sus posiciones.
if(newArray.length < 3){                   // los 3 meses tienen que estar newArray = ["Enero", "Marzo", "Noviembre"]
  return "No se encontraron los meses pedidos"

} else{
  return newArray;
}
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var newArray = [];
  for(let i = 0; i < array.length; i++){
    if (array[i] > 100){
      newArray.push(array[i]);
    }
  }
  return newArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var newArray = []                // supongamos un array y vamos recorriendo y sumando 10 veces: [1,3,5..]
  var suma = numero;            // asi va quedando pq hay que tener en cuenta que hay que ir sumandole 2
  for (var i = 0; i < 10; i++){  //iteracion maximo 10 veces
     suma = suma + 2;
     if (suma === i) break;   //si la suma y el numero de iteracion coincide "terminamos"

    else{
     newArray.push(suma);
    }
}
    if(i < 10){
      return "Se interrumpió la ejecución";
    } else {
      return newArray;
}
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var newArray = [];
  var suma = numero;
  for (let i = 0; i < 10; i++){
    if(i === 5) continue;      //vuelve al for. No lo suma y continua con la siguiente iteracion.
    else {
      suma = suma +2;
      newArray.push(suma);
    }
  }
  return newArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
