addEventListener(`DOMContentLoaded`, ()=>{
     //Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados de Iva, Subtotal y Total de la compra de los artículos.

let prod1 =(prompt(`COLOQUE EL VALOR DEL PRODUCTO : `, 2500))

let prod2 =(prompt(`COLOQUE EL VALOR DEL PRODUCTO : `, 2500))

let prod3 =(prompt(`COLOQUE EL VALOR DEL PRODUCTO : `, 2500))

let prod4 =(prompt(`COLOQUE EL VALOR DEL PRODUCTO : `, 2500))

let prod5 =(prompt(`COLOQUE EL VALOR DEL PRODUCTO : `, 2500))

// operaciones

let tol=(prod1+prod2+prod3+prod4+prod5)
let iva =(prompt("coloque el valor del iva: ",3000))
let vaiva = tol*iva
let rest = tol+vaiva

console.log(`EL VALOR DEL PRODUCTO CON EL IVA ES : ${rest}`)

console.log(`EL SUB VALOR ES DE : ${tol}`)

console.log(`VALOR DEL IVA : ${vaiva}`)

})
