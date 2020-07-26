// Se pide un importe y un porcentaje descuento por prompt, 
// y se muestra el importe con el descuento por alert 
// con el mensaje " el importe es $ xxxx el total de descuento es $xxx 
// y el precio final es $xxx, gracias por su compra"


function mostrarAumento{

	var importeIngresado;
	var porcentajeIngresado;
	var descuento;
	var importeConDescuento;
	
	
	importeIngresado=prompt("Ingrese aqui su importe:");
	importeIngresado= parseInt(importeIngresado);
	
	porcentajeIngresado=prompt("Ingrese aqui el porcentaje de descuento:");
	porcentajeIngresado= parseInt(porcentajeIngresado);
	
	
	descuento= (importeIngresado*porcentajeIngresado)/100;
	importeConDescuento= importeIngresado - descuento;
	
	
	
	alert=("el importe es $" + importeIngresado + " el total de descuento es $" + descuento + " y el precio final es $" + importeConDescuento + "gracias por su compra");
	
}
	
	
	