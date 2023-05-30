/* 
DRY: dont repeat yourself
DRY: no repetir codigo


console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
console.log("hola mundo")
*/


/* 
BUCLE FOR

for(let contador = 1; contador <= 10; contador = contador + 1){
    console.log(contador + " pasada")
    console.log("hola mundo")
}

Se suele utilizar la palabra iterador para la variable for
tambien se la suele llama i como abreviacion de iterador
*/



// 1)Imprime los numeros del 1 al 10
// 2)imprime los numeros pares del 2 al 20
// 3)Imprime los numero impares del 1 al 19
// 4)Imprime los numeros del 10 al 1 en orden inverso


/* 
for(let i=1; i<=10; i=i+1){
    console.log(i)
} 

for(let i=2; i<=20; i=i+2){
    console.log(i)
} 

for(let i=1; i<=20; i=i+2){
    console.log(i)
} 

for(let i=10; i>=1; i=i-1){
    console.log(i)
} 
*/


/* 
for(let i=1; i= 10; i=i+1){
    let nombre = prompt("ingrese nombre")
    if(nombre === "nahuel")
        break
}  
*/


//Imprime los números del 1 al 10, pero salta el 5 y 6

/* 
for(let i=1; i<=10; i=i+1){
    if(i==5 || i==6){
        continue
    }
    console.log(i)
}
*/

/* 
BUCLE WHILE
Sirve para saber cuando no vamos a acabar el bucle

let decision=prompt("ingrese SI para continuar el programa")
while(decision==="SI"){
    alert("el programa se esta ejecutando")
    decision= prompt("Ingrese SI para continuar el programa")
} 
*/

/* 
crear una calculadora:
solicitaremos al usuario una decision "si desea usar la calculadora presiona SI"
luego si se presiono SI, se solicite una operacion y 2 numero, y se resolvera segun la
operacuin correspondiente (+ o -)
si la operacion no existe entonces se dira "ERROR: operacion no valida"
al finalizar el programa de la calculadora se volvera a solicitar una decision que dira 
"Escriba Si si desea usar la calculadora"

Se dira 'La calculadora ha finalizado' en caso de haberse acabado el bucle while
OPCIONAL: Agregar las operaciones * y /
OPCIONAL: La operacion ademas de ser + debera funcionar con su formato texto "sumar", lo mismo con el resto de operaciones
MERITORIO: Se validara que los numeros ingresados sean numeros previo al if de las oepraciones
*/

/* 
let operacion=prompt("ingrese la operacion")
let numero1 = Number(prompt("ingrese un numero"))
let numero2 = Number(prompt("ingrese un numero"))
if(operacion === "+"){
    alert("el resultado de " + numero1 + "+" + numero2 + " es: " + (numero1+numero2))
} 
*/

/* 
let decision = prompt("Si desea usar la calculadora escriba SI")
while(decision === "SI","si"){

    let operacion = prompt("ingrese la operacion +, -, * o /")
    let numero1 = Number(prompt("Ingrese un numero"))
    let numero2 = Number(prompt("Ingrese un numero"))

    if(operacion === "+"){
        alert("el resultado de " + numero1 + "+" + numero2 + " es: " + (numero1+numero2))
    }
    else if(operacion === "-"){
        alert("el resultado de " + numero1 + "-" + numero2 + " es: " + (numero1-numero2))
    }
    else if(operacion === "*"){
        alert("el resultado de " + numero1 + "*" + numero2 + " es: " + (numero1*numero2))
    }
    else if(operacion === "/"){
        alert("el resultado de " + numero1 + "/" + numero2 + " es: " + (numero1/numero2))
    }
    else{
        alert("ERROR: operacion no valida")
    }
    decision = prompt("Desea usar nuevamente la calculador? (si o no)")
}
alert("la calculadora ha finalizado") 
*/


/* 
METODO DE STRING

let nombre = "nahuel"
console.log("la cantidad de caracteres del string " + nombre + " es: " + nombre.length)


let msj = prompt("ingrese un mensaje")
if(msj.includes("putito")) {
    console.log("hemos detectado que este mensaje tiene contenido sensible como la cola de tu hermana")
}
else{
    console.log("no hay contenido sensible en el mensaje")
}
*/

