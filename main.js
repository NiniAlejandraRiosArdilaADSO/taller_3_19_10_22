addEventListener(`DOMContentLoaded`, ()=>{
    // Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

    let numero1 =(prompt(`por favor escriba un numero : ` ,55))

    let numero2 =(prompt(`por favor escriba un numero : ` ,50))

    let numero3 =(prompt(`por favor escriba un numero : ` ,29))
// MAYORES
if (numero1 > numero2 && numero1 > numero3 ) {
    console.log(`El numero ${numero1} es el mayor`)
    }
else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`El numero ${numero2} es el mayor `)
    }
else {
    console.log(`El numero ${numero3} es el mayor`)
    }
// MENORES

if (numero1 < numero2 && numero1<numero3) {
    console.log(`El numero ${numero1} es el menor` )
}
else if (numero2 < numero1 && numero2 < numero3) {
    console.log(`El numero ${numero2} es el menor` )
}
else {
    console.log(`El numero ${numero3} es el menor` )
}
// IGUALES

if (numero1 == numero2 ) {
    console.log(`El numero 1 y 2 son iguales ` )
}
else if (numero2 == numero3) {
    console.log(`El numero 2 y 3 son iguales `)
}
else {
    if (numero1 == numero2 == numero3) {
        console.log(`Los 3 numeros son iguales`)
    }
    else if (numero1 == numero3) {
        console.log(`El numero 1 y 3 son iguales`)
    }
}

})
