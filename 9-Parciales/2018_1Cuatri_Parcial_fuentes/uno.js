/*Realizar el algoritmo que pida el ancho 
y el largo de un rectángulo por prompt y que muestre el perímetro por alert. */
function mostrar()
{
	var anchoIngresado;
	var largoIngresado;
	var perimetro;

	anchoIngresado= prompt("Ingresa aqui el ancho del rectangulo");
	largoIngresado= prompt("Ingresa aqui el largo del rectangulo");

	perimetro= anchoIngresado*2 + 2*largoIngresado;

	alert("El perimetro de ese rectangulo es de " + perimetro + " metros.");


}
