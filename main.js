addEventListener(`DOMContentLoaded`, ()=>{
    // Cálculo de áreas - Elige una figura geométrica:" Triángulo y Círculo ¿Qué figura quiere calcular (Escriba T o C)? Triangulo = base * altura / 2 Circulo = PI * radio* radio
console.log(`Elige una figura Triangulo o Cuadrado!`)

let opcion =(prompt(`Escriba t o c:  `)) 

if (opcion == `t`) {
    console.log(`Triangulo = base * altura / 2 `)
    let base = (prompt(`Ingrese la base de su triangulo : ` ,23))
    let altura = (prompt(`Ingrese la altura de su triamgulo : `, 12))
    let trg = base*altura/2
    console.log (`El area de su triangulo es ${trg} `)
}

else {
    if (opcion == `c`) {
        Math.PI
        console.log(`PI*radio^2`)
        let radio = (prompt(`Ingrese el radio de su circulo :`  , 44))
        let cir = (Math.PI) * Math.pow(radio, 2)
        console.log(`El area de su circulo es  ${cir}`)

    }
}
})

