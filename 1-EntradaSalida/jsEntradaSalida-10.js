/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// var importe;
	// var resultadoDescuento;


	// importe= txtIdImporte.value;
	// importe=parseInt(importe);

	// resultadoDescuento= importe - (importe*25)/100;

	// // document.getElementById('txtIdResultado').value= resultadoDescuento;

	// txtIdResultado.value= resultadoDescuento;

var importeIngresado;
var porcentajeIngresado;
var descuentoCalculado;
var importeConDescuento;


importeIngresado=prompt("Ingrese aqui su importe:");
importeIngresado= parseInt(importeIngresado);

porcentajeIngresado=prompt("Ingrese aqui el porcentaje de descuento:");
porcentajeIngresado= parseInt(porcentajeIngresado);


descuentoCalculado= (importeIngresado*porcentajeIngresado)/100;
importeConDescuento= importeIngresado - descuentoCalculado;



alert("el importe es $" + importeIngresado + " el total de descuento es $" + descuentoCalculado + " y el precio final es $" +importeConDescuento+ "gracias por su compra");

}

