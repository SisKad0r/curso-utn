/* 
ARRAYS
es un tipo de dato que nos permite guardar una lista de elementos ordenada
siempre declarar las arrays con "CONST"

const listaDeAlumnos = ["Nahu", "Nico", "Brian", "Thiago", "Rodri"]

document.write(listaDeAlumnos[2])
document.write(listaDeAlumnos.length) Nos muestra la cantidad  de datos


<//>=============================================================================<//>


agrega un elemento al final del array
listaDeAlumnos.push()

agrega un elemento al principio del array
listaDeAlumnos.unshift()

elimina el ultima elemento y lo devuelve
listaDeAlumnos.pop()

elimina el primer elemento y lo devuelve
listaDeAlumnos.shift()

elimina y agrega elementos (apartir del elemento n1)
listaDeAlumnos.splice(1, 2, "")

averigua la posicion de un elemento en el array
listaDeAlumnos.indexOf("")




Se debera eliminar a Neymar y se agregara al principio del array =>
let posicionDeNeymar = listaDeJugadores.indexOf("Neymar")
listaDeJugadores.splice(posicionDeNeymar, 1)
listaDeJugadores.unshift("Neymar")

Se debera reemplazar a Di Maria por Ronaldo =>
let posicionDeDiMaria = listaDeJugadores.indexOf("Di Maria")
listaDeJugadores.splice(posicionDeDiMaria, 1, "Ronaldo")

Se agregara despues de Modric a 'Serre7' =>
let posicionDeModric = listaDeJugadores.indexOf("Modric")
listaDeJugadores.splice((posicionDeModric + 1), 0, "Cr7")

console.log(listaDeJugadores)


<//>=============================================================================<//>


const listaDeJugadores = [ 'Messi', 'Modric', 'Otamendi', 'Di Maria', 'Vinicius', 'Neymar', 'Burruchaga'];

for(let i=0; i < listaDeJugadores; i++){
    if(listaDeJugadores[i][0] === "O"){
        console.log(listaDeJugadores[i])
    }
} 



const mesajes = [
    "buen dia",
    "todo bien",
    "no estoy a gusto, bobo",
    "anda pa alla bobo"
]
const mensajesOfensivo = []

for(let i=0; i < mensajes.length; i++){
    if(mensajes.includes("bobo")){
        console.log("el mensaje " + mensajes[i] + " contiene la palabra ofensiva, BOBO")
        mensajesOfensivo.push(mensajes[i])
    }
}

for(let mensajes of mensajes){
    if(mensajes.includes("bobo")){
        console.log("el mensaje " + mensajes + " contiene la palabra ofensiva, BOBO")
        mensajesOfensivo.push(mensajes)
    }
} 


<//>=============================================================================<//>


hambitos:

let nombre = "juan"
if(true){
    let nombre = "maria"
    console.log(nombre)
    if(true){
        let nombre = "pedro"
        console.log(nombre)
    }
    console.log(nombre)
}
console.log(nombre)

podemos usar la misma variable en diferentes hambitos


<//>=============================================================================<//>


Funciones:

Declaracion:
const saludar = (nombre)=>{
    let saludo = `hola ${nombre}, como estas?`
    console.log(saludo)
}

Invocacion, llamada, ejecucion:
saludar("")


Generar la funcion es mayor de edad:
const esMayorDeEdad = (edad) => 
    return edad >= 18
}


Generar una funcion llamada esVocal(letra) nos devolvera (true o false) dependiendo de si es vocal:
const esVocal = (letra) =>{
    return letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"
}

console.log(esVocal("a"))
console.log(esVocal("b"))
console.log(esVocal("e"))


*/

