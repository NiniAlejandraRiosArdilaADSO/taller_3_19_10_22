addEventListener(`DOMContentLoaded`, ()=>{
    // Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestreen pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.

console.log(`indique si desea registrar la (p)presion o (t)temperatura`)

let pregunta =(prompt(`Indique p o t `)) 

// CONDICIONES

if (pregunta == `p`) {
    
    let presion = (prompt(`Ingrese el numero de la presion : `,200))
    
    if (presion > 200) {
        console.log (`ALARMA!! Revise su presion `)
    }

    else {
        console.log(`La presion esta normal y ya se guardaron tus datos `)
    }
    }
if (pregunta == `t`) {

    let temperatura = (prompt(`Ingrese su temperatura ` ,37))

    if (temperatura >= 40) {
        
        console.log (`¡CUIDADO! su temperatura esta muy alta `)

    }

    else {

        console.log (`La tempratura esta normal y ya fue guardada `)
    }

}

})

