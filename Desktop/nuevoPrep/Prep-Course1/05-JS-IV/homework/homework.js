// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  const gato = {     //objeto
    nombre: nombre,    //propiedad "nombre" y valor como el argumento "nombre" (el nombre nos pasan por parametro)
    edad: edad,        // (la edad nos pasan por parametro tamb)
    meow: function(){  // De esta forma se agrega un "metodo" funcion.
      return 'Meow!'
    }
  }
  return gato; 
}


function agregarPropiedad (objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:

  // viendo el ejercicio anterior
  // gato[nombre] = "meow" ----> nombre: "meow" (cambiamos o agregamos una propiedad)

objeto[property] = null;   //de esta forma se agrega una propiedad.
return objeto;
  
}

function invocarMetodo (objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo]();  // es una propiedad del objeto, en este caso es una funcion.
}                    // si miramos el primer ejercicios...gato[meow]()


function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
return objetoMisterioso.numeroMisterioso * 5;   //accedemos a la propiedad numeroMisterioso

}

function eliminarPropiedad (objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar                   ---> bracket notation <----
  // Devuelve el objeto
  // Tu código:

  delete objeto[unaPropiedad];             //<---- bracket notation
  return objeto;

}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:

const newUser = {
  nombre: nombre,
  email: email,
  password: password,
}  
return newUser;
}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email){    //de esta forma buscamos si existe el valor de una propiedad
    return true;          //if (usuario["email"]) ---> tamb puede ser.
  }else {
    return false;
  }
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if(objeto[propiedad]){    // no va con comilla para no se llama propiedad la propiedad si no que es un string.
    return true;
  }else{
    return false;
  }
}

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
return usuario["password"] === password   //tener en cuenta que comparamos un password (que puede ser cualquiera)
//                                          con el password que nos pasan como argumento. 
/*                                          //va comilla o . cuando nos referimos a una propiedad especifica.
if(usuario.password === password){
  return true;
}   else{
  return false;
}
*/
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
usuario.password = nuevaPassword;   //con bracket notation usuario["password"] = nuevaPassword
return usuario;

}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:

// usuario = {   --->objeto
//  amigos:[]    --->propiedad que es un array
//} 

usuario.amigos.push(nuevoAmigo);
return usuario;
}



function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  //usuarios = [{esPremium:true}, {}, {}]  --->es un array de objetos

  for (var i = 0; i < usuarios.length; i++){
     usuarios[i].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:

// usuario = {                                ---> usuario y su propiedad posts
// posts:[{likes:1}, {likes:6}, {likes:32}]   --->los objetos post {} estan dentro del array posts []
//  } 

var suma = 0                                     //--> hay que sumar todos los likes
for(var i = 0; i < usuario.posts.length ; i++){   // estamos en usuario pero en la propiedad posts
suma = suma + usuario.posts[i].likes;
}
return suma;
}


function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

// agragar un metodo --> como agregamos una propiedad pero la igualamos a function ()

producto.calcularPrecioDescuento = function(){
  return producto.precio - (producto.precio * producto.porcentajeDeDescuento); // podemos usar this (hace referenca al objeto)
}        //this.precio       this.precio        this.porcentajeDeDescueno                                      
return producto;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
