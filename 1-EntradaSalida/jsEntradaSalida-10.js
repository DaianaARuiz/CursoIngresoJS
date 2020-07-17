/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultadoDescuento;


	importe= txtIdImporte.value;
	importe=parseInt(importe);

	resultadoDescuento= importe - (importe*25)/100;

	// document.getElementById('txtIdResultado').value= resultadoDescuento;

	txtIdResultado.value= resultadoDescuento;


}
