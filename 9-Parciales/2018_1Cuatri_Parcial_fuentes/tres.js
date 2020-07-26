/*Pedir por prompt el precio y el porcentaje de descuento,
 mostrar el precio final con descuento por id.*/


function mostrar()
{
	var precioIngresado;
	var porcentajeIngresado;
	var precioConDescuento;

	precioIngresado=prompt("Ingrese aquí el precio");
	porcentajeIngresado=prompt("Ingrese aquí el porcentaje del descuento que desea aplicar");

	precioConDescuento= precioIngresado - porcentajeIngresado*precioIngresado/100;

	elPrecioFinal.value=precioConDescuento;

	/*El orden importa, al reves no funciona:
	precioConDescuento=elPrecioFinal.value; */

}
