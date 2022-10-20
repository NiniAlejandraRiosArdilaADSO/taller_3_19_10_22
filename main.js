addEventListener(`DOMContentLoaded`, ()=>{
    //Programa para solicitar el nombre, apellido, edad y la nota promedio de 5 estudiantes de un curso de computación

let nombre =(prompt(`INGRESE SU NOMBRE : `,`nini`));

let apellido = (prompt(`INGRESE SU APELLIDO : `,`Rios`));

let edad = (prompt(`INGRESE SU EDAD : `, 17));

let n1 =(prompt(`INGRESE SU NOTA 1: `,5))

let n2 =(prompt(`INGRESE SU NOTA 2: `,5))

let n3 =(prompt(`INGRESE SU NOTA 3: `,3))

let n4 =(prompt(`INGRESE SU NOTA 4: `,2))

let n5 =(prompt(`INGRESE SU NOTA 5: `,4))

//operacion

let prome = (n1+n2+n3+n4+n5)/5

if (prome >= 5) {
    
    console.log(`FELICIDADES APROBO `)
} else {
    
    console.log(`NO APROBADO`)
}
console.log(`Nombre : ${nombre} ${apellido}  
edad : ${edad}`)
console.log (`EL PROMEDIO DE SUS NOTAS ES : ${prome}`)

})
