addEventListener(`DOMContentLoaded`, ()=>{
    // Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él segundo, en caso contrario indicar con un mensaje que la operación no es posible realizarla.
        
let num1= (prompt(`INGRESE EL PRIMER NUMERO `, 6))

let num2= (prompt(`INGRESE EL SEGUNDO NUMERO: `, 5))

if (num1>num2) {
    let res=num1-num2
    console.log(`SU RESPUESTA ES: ${res}`)
} else {
    console.log(`NO ES POSIBLE REALIZAR LA OPERACION `)
}



})
