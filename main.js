addEventListener(`DOMContentLoaded`, ()=>{
    // En una tienda de HELADO da un descuento por compra a sus clientes con membresía dependiendo
    // de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
    // Los descuentos son los siguientes:
    // Tipo A 10% de descuento
    // Tipo B 15% de descuento
    // // Tipo C 20% de descuento

console.log(`ELIJA UNA LETRA SEGUN SU MEMBRESIA, SI ES TIPO (a), TIPO(b), TIPO(c) Y (d)NO TIENE MENBRESIA `)

let membresia=(prompt(`DIJITE SU TIPO DE MEMBRESIA A, B, C, D: `, `b`))

let num1=(prompt(`INGRESE EL PRECIO DEL HELADO: `,4500))

if (membresia==`a`) {
    let res= num1*0.10
    let res2= num1-res
    console.log (`EL VALOR DEL HELADO ES ${res2} CON EL DESCUENTO DE LA MEMBRESIA TIPO A`)
} 

else if (membresia == `b`){
    let res= num1*0.15
    let res2= num1-res
    console.log (`EL VALOR DEL HELADO ES ${res2} CON EL DESCUENTO DE LA MEMBRESIA TIPO B`)
}
if (membresia==`c`){
    let res= num1*0.20
    let res2= num1-res
    console.log (`EL VALOR DEL HELADO ES ${res2} CON EL DESCUENTO DE LA MEMBRESIA TIPO C`)
}else if (membresia==`d`){
    console.log (`EL VALOR DEL HELADO ES ${num1} SIN NINGUN DESCUENTO )
}

})