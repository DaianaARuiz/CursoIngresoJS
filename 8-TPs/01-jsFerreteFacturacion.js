/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

	var precioIngresadoUno;
   	var precioIngresadoDos;
	var precioIngresadoTres; 

function Sumar () {  	

	var resultadoSuma;

	precioIngresadoUno=txtIdPrecioUno.value;
	precioIngresadoUno=parseInt(precioIngresadoUno);

	precioIngresadoDos=txtIdPrecioDos.value;
	precioIngresadoDos=parseInt(precioIngresadoDos);

	precioIngresadoTres=txtIdPrecioTres.value;
	precioIngresadoTres=parseInt(precioIngresadoTres);

	resultadoSuma= precioIngresadoUno + precioIngresadoDos + precioIngresadoTres;

	alert("El resultado de la suma es " + resultadoSuma);


}
function Promedio () 
{
	var resultadoPromedio; 

	precioIngresadoUno=txtIdPrecioUno.value;
	precioIngresadoUno=parseInt(precioIngresadoUno);

	precioIngresadoDos=txtIdPrecioDos.value;
	precioIngresadoDos=parseInt(precioIngresadoDos);

	precioIngresadoTres=txtIdPrecioTres.value;
	precioIngresadoTres=parseInt(precioIngresadoTres);

	resultadoPromedio=  (precioIngresadoUno +precioIngresadoDos+ precioIngresadoTres)/3;

	alert("El promedio es " + resultadoPromedio);

	
}
function PrecioFinal () 
{
	var resultadoSuma;
	var precioConIva;

	precioIngresadoUno=txtIdPrecioUno.value;
	precioIngresadoUno=parseInt(precioIngresadoUno);

	precioIngresadoDos=txtIdPrecioDos.value;
	precioIngresadoDos=parseInt(precioIngresadoDos);

	precioIngresadoTres=txtIdPrecioTres.value;
	precioIngresadoTres=parseInt(precioIngresadoTres);

	resultadoSuma= precioIngresadoUno + precioIngresadoDos + precioIngresadoTres;

	precioConIva= resultadoSuma + (resultadoSuma*21)/100;

	alert("El precio final es " + precioConIva );
}