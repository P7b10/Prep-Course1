// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  // "M A R I O"
  //  0 1  2 3 4 ---> chartAt(6) ---> "I"
  return nombre.charAt(0).toUpperCase() + nombre.slice(1) //slice le paso desde donde quiero iniciar
  }

//console.log(mayuscula("mario")) View.--command pannel..hacer correr quokka

/*var nuevoNombre = nombre[0].toUpperCase() + nombre.substring(1)
  //                     M                    + ario(el 1 indicaria que arranca desde la posicion 1 hasta el final)
   return nuevoNombre;  */

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
return cb(n1, n2);


}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  // numero = [1, 2, 3, 4, 5] --> 15

var suma = 0;                               
for (var i = 0; i<numeros.length; i++){
  suma = suma + numeros[i];
}
cb(suma);                        //pasamos el resulrado suma a cb
  }

//let suma = 0 
// numeros.forEach((element)=>{    //forEach hace lo mismo que el bucle for (podemos poner e, element, lo que sea)
//  suma = suma + element;          // numeros = [1, 2, 3, 4, 5] => 15 numeros [i] === element
// })
//cb(suma) 
// }

//REDUCE: hace lo mismo que el ciclo FOR
/*var sumaTotal = numeros.reduce(function(a, b){      a: valor precio
    return a + b;                                     b: valor siguiente
  }
,0);                                                  0: que arranque en 0 
cb(sumaTotal);

}
*/
function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:

//array ---> [1, 2, 3, 4]
//             e          en la primer vuelta
//                e       en la segunda vuelta
//cb es un funcion que algo va a ir haciendo con los elementos que le va llegando
// ej: cb --> funcion suma(s)
//                     s + 1
//en la primer posicion 1 + 1  
array.forEach((e)=>{    //e va tomando los elementos del array
  cb(e)                   
})  
}
/*
for (var i = 0: i < array.length; i++){
  cb(array[i])
}
 }
*/


function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  // [1, 2, 3, 4, 5]
  // el cb segun el test num * num --> [1, 4, 9, 16, 25] seria mi nuevoArreglo
  
 var nuevoArreglo = [];
 for (var i = 0; i< array.length; i++){
  nuevoArreglo.push(cb(array[i]));   //pasamos la iteracion del array a cb..y lo push a nuevoArreglo.
 } 
 return nuevoArreglo;

 // var nuevoArreglo = array.map(function(i){    //en lugar de i podria ir element
 // return cb(i);                                //en este caso si es necesario ---> return <--
 ///});
 //return nuevoArreglo;

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  // segun el test ->> var array = ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo'];

 var nuevoArreglo = [];
 for (var i = 0; i < array.length; i++){
if (array[i] [0] == "a"){ 
  nuevoArreglo.push (array[i]);  // dos == pq no necesariamente debe ser estrictamente a..puede ser a o A.
}

}return nuevoArreglo;
 }

// git add .   o el nombre de lo que vamos a subir (en este caso el 07)
// git commit -m "clase js 6"
// git push

//return array.filter(function (elements){
//  return elements[0] == "a";              //return elements.charAt(0) === "a"
//});
// }
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
