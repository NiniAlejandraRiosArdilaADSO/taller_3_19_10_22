addEventListener(`DOMContentLoaded`, ()=>{
    // Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que muestreen pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal.

console.log(`indique si desea registrar la (p)presion o (t)temperatura`)

let presion =(prompt(`Indique P o T `)) 

// CONDICIONES

if (presion == `p`) {
    
    let presion = (prompt(`Ingrese el numero de la presion : `,200))
    
    if (presion > 200) {
        console.log (prompt(`ALARMA!! se aconseja que revise la presion`))
    }
    }

})

