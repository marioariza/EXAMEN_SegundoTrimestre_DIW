'use strict'

window.addEventListener("load",function() {
    document.getElementById('loader').classList.toggle('loader2');
})

$(document).ready(function() {
    $('.frase_loader').hide(100).delay(300).show(300);
});

$(document).ready(function() {
    $('#navfix').hide(900).delay(1300).show(770);
});

$(document).ready(function() {
    $("#boton_inicio").click(function() {
        $(".texto_inicio").toggle();
    });
});

$(document).ready(function() {
    $("#boton_servicios").click(function() {
        $(".ser").toggle();
    });
});

$(document).ready(function() {
    $("#boton_nosotros").click(function() {
        $(".con").toggle();
    });
});

$(document).ready(function() {
    $("#boton_contact").click(function() {
        $(".form-contact").toggle();
    });
});

// GRADIENT

let colors = new Array(
    [237, 224, 212],
    [230, 204, 178],
    [221, 184, 146],
    [176, 137, 104],
    [127, 85, 57],
    [156, 102, 68]);
  
let step = 0;

let colorIndices = [0,1,2,3];

let gradientSpeed = 0.002;
  
function updateGradient() {
    
    if ( $===undefined ) return;
    
    let c0_0 = colors[colorIndices[0]];
    let c0_1 = colors[colorIndices[1]];
    let c1_0 = colors[colorIndices[2]];
    let c1_1 = colors[colorIndices[3]];
  
    let istep = 1 - step;
    let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    let color1 = "rgb("+r1+","+g1+","+b1+")";
  
    let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    let color2 = "rgb("+r2+","+g2+","+b2+")";
  
    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
        background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
        step += gradientSpeed;
        if ( step >= 1 ) {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];
      
            colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
}
  
setInterval(updateGradient,10);

// FORM

function enviar() {

    let nombre = document.getElementById('name');
    let email = document.getElementById('mail');
    let telefono = document.getElementById('phone');
    let mensaje = document.getElementById('message');

    let valornombre = nombre.value;
    let expRegNomApe = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";

    if (valornombre === null || valornombre === '') {
        alert('Tienes que rellenar el campo "Nombre".');
    } else if (valornombre.match(expRegNomApe) == null) {
        alert('Nombre y apellidos inválidos (Ejemplo: Cristiano Ronaldo)');
    }

    let valorEmail = email.value;
    let expRegEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if (valorEmail === null || valorEmail === '') {
        alert('Tienes que rellenar el campo "Email".');
    } else if (valorEmail.match(expRegEmail) == null) {
        alert('Email inválido (Ejemplo: nombre@gmail.com).')
    }

    let valorTelefono = telefono.value;
    let expRegTel = /^\d{3}\s\d{2}\s\d{2}\s\d{2}$/;

    if (valorTelefono === null || valorTelefono === '') {
        alert('Tienes que rellenar el campo "Télefono".');
    } else if (valorTelefono.match(expRegTel) == null) {
        alert('Télefono inválido (Ejemplo: 665 65 65 65, 9 cifras, las 3 primeras separadas por un espacio las siguientes agrupadas de 2 en 2).')
    }

    let valorMensaje = mensaje.value;

    if (valorMensaje === null || valorMensaje === '') {
        alert('Tienes que rellenar el campo "Mensaje".');
    } 

    if (valornombre !== null && valornombre !== '' && valornombre.match(expRegNomApe) !== null && valorEmail !== null && valorEmail !== '' && valorEmail.match(expRegEmail) !== null && valorTelefono !== null && valorTelefono !== '' && valorTelefono.match(expRegTel) !== null && valorMensaje !== null && valorMensaje !== '') {
        alert('Formulario enviado correctamente');
    }
}