addEventListener(`DOMContentLoaded`, ()=>{
    // Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos: área triangulo= lado * lado.
console.log(`Calcule el area de un rectangulo`)

let lado1 =(prompt(`ingrese el lado 1:  ` ,55)) 

let lado2 =(prompt(`ingrese el lado 2:  ` ,23))

// CONDICIONES


if (lado1 > 0 && lado2 > 0 ) {
    
    let area = lado1*lado2
    
    console.log (`El area de su rectangulo  ${area}`)
    }
else {
    console.log (`ESTE NO ES UN NUMERO POSITIVO, por favor ingresa solo numeros positivos !!`)
    }

})

