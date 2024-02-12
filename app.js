let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }
    else {
        // el usuario no acepto
        if (numeroDeUsario < numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es mayor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        intentos++;
        limpiarCaja();
    };
    return;
}

function limpiarCaja(){
    // busqueda por id, otra forma
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(limite) {
    let numeroSecreto = Math.floor(Math.random()*limite) + 1;
    
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else{
        if (listaNumerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto()
        } else{
            listaNumerosSorteados.push(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function condicionesInciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto actualizado');
    asignarTextoElemento('p', `Indicar un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(numeroMaximo);
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // Inicializar el numero de intentos
    condicionesInciales();
    // Deshabilitar el btn de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesInciales();

// variables de tipo arreglo 
// let array = [];

// recursividad

// actividad

//1
let listaGenerica = [];

// 2
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// 3
lenguagesDeProgramacion.push('Java');
lenguagesDeProgramacion.push('Ruby');
lenguagesDeProgramacion.push('GoLang');
// 4/5
function listaLPInverso(lista) {
    for (let index = 0; index <lista.length; index--) {
        console.log(lista[index]);
    }
}

function listaLPInverso(lista) {
    for (let index = lista.length - 1; index >= 0; index--) {
        console.log(lista[index]);
    }
}
//6

function prom(listNum){
    let promN = 0;
    for (let index = 0; index < listNum.length; index++) {
        promN += listNum[index];
    }
    promN = promN/listNum.length;
    return promN;
}

//7
function mayorYMenor(array){
    let menor = array[0];
    let mayor = array[0];
    for (let index = 1; index < array.length; index++) {
        if (array[index] > mayor){
            mayor = array[index];
        }
        if(array[index] < menor){
            menor = array[index];
        }
    }
    console.log(`El menor es ${menor} y el mayor es ${mayor}`);
}

//8
function sumaElemList(array){
    let suma = 0;
    for (let index = 0; index < array.length; index++) {
        suma += array[index];
    }
    return suma;
}

// 9
function encontrarElemento(array, elemento){
    for (let index = 0; index < array.length; index++) {
        if (array[index] == elemento){
            return index;
        }
    }
    return -1;
}

//10
function sumaListas(array1, array2){
    let sumaLista = [];
    for (let index = 0; index < array1.length; index++) {
        sumaLista.push(array1[index] + array2[index]);
    }
    return sumaLista;
}

//11
function cuadradoListas(array){
    let cuadradoLista = [];
    for (let index = 0; index < array.length; index++) {
        cuadradoLista.push(array[index]^2);
    }
    return cuadradoLista;
}