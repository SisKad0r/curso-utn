/* 
Objeto literal

const usuario = {
    nombre: "lucas",
    apellido: "suarez",
    edad: 30
}

estos objetos no tienen un orden espesifico como los arrays
los objetos se conforman => 
const () {
}

const usuario = { 
    nombre: "lucas",
    apellido: "suarez",
    edad: 30,
    amigos: [
        "pepe",
        "juan"
    ]
}
*/

/*
Templet String

console.log(
    `Hola ${usuario.nombre} ${usuario.apellido}! Cuantos años tenes?`
)

<//>=============================================================================<//>

hacer un bucle que recorrar el arrays objeto y que por cada elemento
decir: "Hola me llamo nombre y apellido"

const alumnos = [
    {
        nombre: "Maria",
        apellido: "Juana",
    },
    {
        nombre: "Lucas",
        apellido: "Suarez",
    },
    {
        nombre: "Ivana",
        apellido: "Suarez",
    }
]

for (const alumno of alumnos) {
    console.log(`Hola me llamo ${alumno.nombre} ${alumno.apellido}`,)
}

<//>=============================================================================<//>

Forma avanzada de usar for

sirve para recorrer un array:
alumnos.forEach((alumno) => {
    console.log(`%{index +1} Hola me llamo 
    ${alumno.nombre} ${alumno.apellido}`)
})

crear un arrays en base de otro array:
map devuelve un array donde cada elemento es el return de la funcion
const nombresCompletos = alumnos.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellido}`
})

<//>=============================================================================<//>

Sirve para recorrer un array

alumnos.forEach((alumno, index, array)=> {
    console.log(`${index +1}) Hola me llamo ${alumno.nombre} ${alumno.apellido}`)
})

Sirve para recorrer el array y generar un nuevo array en base al recorrido

const nombresCompletos = alumnos.map((alumno) => {
    return `${alumno.nombre} ${alumno.apellido}`
})

<//>=============================================================================<//>

crear una funcion llamada porDos (array) y devuelve un array de numeros multiplicados por 2
porDos([2,4,6]) => [4,8,12]

const porDos = (arraysDeNumeros) => {
    return arraysDeNumeros.map((numero) => {
        return numero * 2
        })
}
console.log(porDos([2,4,6])); 


mejorar la funcion porDos para que ahora sea la funcion, por(numero, arrayNumero)
por(3, [2,4,6]) => [6,12,18]

const numeros = [2,4,6]
const por = (multiplo, arrayNumero) => {
    return arrayNumero.map((numero) => {
        return numero * multiplo
        })
}
console.log(por(3, numeros)) 

<//>=============================================================================<//>

1)
Dado un array de números, escribir una función que calcule la suma de todos los números del array.

const sumatoria = (arrayDeNumeros) => {
    let total = 0
    arrayDeNumeros.forEach((numero) =>{
        total = total + numero
    })
    return total
}

console.log(sumatoria([8,7,6]))  =>  21

<//>=============================================================================<//>

2)
Dado un array de números, escribir una función que devuelva la suma de todos los números del array que sean pares.

const sumaPares = (arrayDeNumeros) => {
    let total = 0
    arrayDeNumeros.forEach((numero) =>{
        if(numero % 2 === 0){
            total = total + numero
            }
        })
    return total
}

console.log(sumaPares([8,7,6]))  =>  14
<//>=============================================================================<//>

3)
Definí una función filtrarPorLongitud que tome por parámetro un número longitud y un array 
de strings palabras y que devuelva un array con las palabras que tengan una cantidad 
de letras mayor a longitud.

filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',])
['remolacha', 'sorpresa', 'verde']


<//>=============================================================================<//>

4)
definí una función longitudes que tome una lista de frases y devuelva un nuevo array que contenga la longitud de cada frase.

<//>=============================================================================<//>
*/




