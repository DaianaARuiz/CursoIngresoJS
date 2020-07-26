/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/



function Rectangulo() 
{
	// Declaro variables: 
	var largoIngresado;
	var anchoIngresado;
	var perimetroCalculado;
	var cantidadAlambreCalculado;

	// Cargo variable con valor del cuadro de texto 
	largoIngresado= txtIdLargo.value;
	// Transformo ese string en numero
	largoIngresado=parseInt(largoIngresado);

	anchoIngresado= txtIdAncho.value;
	anchoIngresado=parseInt(anchoIngresado);

	// Calculo el perimetro de un rectangulo
	perimetroCalculado= 2*largoIngresado + 2*anchoIngresado;

	// Se necesitan 3 alambres en cada lado 
	cantidadAlambreCalculado= perimetroCalculado*3;

	// Muesto por alert 
	alert("Necesitaras: "+ cantidadAlambreCalculado + " metros de alambre.");

}

function Circulo() 
{
	var radioIngresado;
	var circunferenciaCalculada;
	var cantidadAlambreCalculado;

	radioIngresado = txtIdRadio.value;
	radioIngresado=parseInt(radioIngresado);

	circunferenciaCalculada= 2*3.14*radioIngresado;

	cantidadAlambreCalculado= circunferenciaCalculada * 3; 

	alert("Necesitaras: "+ cantidadAlambreCalculado + " metros de alambre.");
}


function Materiales() 
{
	var largoIngresado;
	var anchoIngresado;
	var areaCalculada;
	var cantidadCementoNecesario;
	var cantidadCalNecesaria;
	
	 
	largoIngresado= txtIdLargo.value;
	largoIngresado=parseInt(largoIngresado);

	anchoIngresado= txtIdAncho.value;
	anchoIngresado=parseInt(anchoIngresado);

	areaCalculada= largoIngresado*anchoIngresado;

	cantidadCementoNecesario= areaCalculada*2;
	cantidadCalNecesaria=areaCalculada*3;

	alert("Necesitaras: " + cantidadCementoNecesario + " bolsas de cemento, y " + 
		cantidadCalNecesaria + " bolsas de cal.");
}