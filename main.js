addEventListener(`DOMContentLoaded`, ()=>{
    // En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de horas trabajadas. 

console.log (`Si el trabajador es de planta ponga (p) o si es administrativo  ponga (a)`)

let pregunta =(prompt(`INDIQUE p O a `))

// CONDICIONES  

if (pregunta == `p`) {
    let pagop =20000
    let hp = (prompt(`cuantas horas trabajo `, 44))
    let pago1 = hp*pagop

    console.log(`EL TOTAL DEL PAGO POR HORAS ES ${pago1} PESOS `)
} if (pregunta == `a`) {
    let pagoa =10000
    let ha =(prompt(`Cuantas horas trabajo `, 44))
    let pago2 = ha*pagoa

    console.log(`EL TOTAL DEL PAGO ES ${pago2} PESOS`)
} 

})

