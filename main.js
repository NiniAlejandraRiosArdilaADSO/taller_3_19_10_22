addEventListener(`DOMContentLoaded`, ()=>{
//  Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede los $130.000 el descuento será del 15%, de lo contrario no hay descuento

let condicion =`si`

let total = 0

// CONDICIONES

while (condicion == `si`) {
    
    let a = (prompt(`Ingrese el valor del producto : ` ,45))

    let total1= total+a

    let condicion = (prompt(`Quieres añadir un producto mas ?`))


    if (total > 130000 ) {
    
        let descuento = total - (total * 0.15)
        let descuento2 = total - descuento

        console.log (`Su compra fue mayor de 130000 usted cuenta con el descuento de 15 %`)

        console.log (`El valor de su compra era:  ${total1}`)

        console.log (`El valor con el descuento es:  ${descuento}`)

        console.log (`Su descuento fue de ${descuento2}`)

    } else {
    
        console.log (`El valor de su compra es :  ${total1}`)
}

}

})

