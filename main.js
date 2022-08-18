// Inicialización de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;

//Apuntando a documento HTML
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");

//Generación de números aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//Función principal
function destapar(id){
    tarjetasDestapadas++;
    console.log("Tarjetas destapadas: " + tarjetasDestapadas);
    if (tarjetasDestapadas == 1){
        //Mostrar primera tarjeta
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML = primerResultado;
        //Deshabilitar el primer boton
        tarjeta1.disabled = true;
    }
    else if(tarjetasDestapadas == 2){
        //Mostrar segunda tarjeta
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;
        tarjeta2.disabled = true;
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
        if(primerResultado == segundoResultado){
            tarjetasDestapadas = 0;
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
            if(aciertos == 8){
                mostrarAciertos.innerHTML = `!FELICITACIONES¡ completaste ${aciertos} aciertos`
                mostrarMovimientos.innerHTML = `Completaste los 8 aciertos en ${movimientos} movimientos`
            }
        }
        else{
            setTimeout(()=>{
                tarjeta1.innerHTML = " ";
                tarjeta2.innerHTML = " ";
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;

            }, 2000);
        }
    }
}


