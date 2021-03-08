'use strict';



const divhora = document.querySelector('#divhora');
const boton = document.querySelector('#boton');

//Haciendolo con boton

function mostrar() {
    divhora.style.display = 'block';
    boton.innerHTML = 'Apreta para ocultar la hora';
}

function ocultar() {
    divhora.style.display = 'none';
    boton.innerHTML = 'Apreta para ver la hora';
}


ocultar();

boton.addEventListener('click', function() {
    if (divhora.style.display == 'none') {

        var tiempo = setInterval(() => {
            var fecha = new Date();
            var hora = fecha.getHours().toString();
            var minutos = fecha.getMinutes().toString();
            var segundos = fecha.getSeconds().toString();
            divhora.innerHTML = 'Hora: ' + hora + ' ' + minutos + ' ' + segundos + '  ';
        });
        mostrar();
    } else {

        ocultar();
    }

});