// var miVariable = 24;
// console.log("mi edad es " + miVariable)

// let miVariable2;

// miVariable = 12
// console.log('mi edad ahora es ' + miVariable)

// const miConstante = 3;
// console.log("el valor de mi constante es " + miConstante)


// var op1 = 2
// var op2 = 3
// var resultado = op1 / op2;
// console.log("resultado vale: " + resultado);

// CONDICIONALES

// let miNumero = 6;
// let miNombre = 'Gaston'

// let resultadoPregunta = miNumero == 7;
// console.log(resultadoPregunta);

// if (miNombre == 'Martina' && miNumero > 5){ 
//     console.log('SI.')
// }else {
// console.log ('No.')
// }

// let miNumero2 = 0;
// if(miNumero > 0) {
//     console.log('Mi numero es positivo');
// } else if(miNumero2 === 0){
//     console.log('Mi numero es zero');
// } else{
//     console.log('Mi numero es negativo');
// }
    

    // BUCLES
// let contador = 0
// while(contador < 5){
//     console.log(contador)

//     contador = contador = 1
// }

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// function saludar(nombre, edad){
//     console.log('Hola. Mi nombre es: ' + nombre);
//     console.log('Hola. Mi edad es: ' + edad);
// }

// saludar('Gaston', 22);

// function multiplicar(num1, num2){
//     let resultado = num1 * num2;
//     return resultado;
// }

// let recibidor = multiplicar(2, 5);
// console.log(recibidor)

// ARREGLOS

// let miArreglo = ['Gaston', 'Fer', 'Kev', 'Car'];


// for(let i = 0; i < 4; i++){
//     console.log("Accediendo al indice: " + i)
//     let mostrar = miArreglo[i];
//     console.log(mostrar)
// }

// //OBJETOS

// let persona = {
//     nombre : 'Gaston',
//     edad : 22,
//     masculino : true
// };

// persona.comidaFavorita = 'Paty'

// let persona2 = {
//     nombre : 'Kev',
//     edad : 24,
//     masculino : true
// };

// console.log(persona);
// console.log(persona2.masculino);

// let arregloDeObjetos = [persona, persona2]
// persona.nombre = 'Nuevo nombre'
// console.log(persona);


const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")


btnCalcular.addEventListener("click", calcular)

function calcular(){
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if(operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/" && !isNaN(op1) && !isNaN(op2) ){
        let resultado;
        switch(operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break  
        }
        pResultado.style = "color:green"
        pResultado.innerText = "= " + resultado
        //    console.log("calculo posible") 
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "calculo imposible"
        // console.log("calculo imposible")
    }
}