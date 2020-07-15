/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado=txtIdNombre.value;
	edadIngresada= txtIdEdad.value;
	
	alert("Usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " años.");

/* No escribir todo de una porque hay gran posibilidades de error
Me conviene copiar y pegar y luego y agregando
las comillas y sumas respectivamente
alert("Usted se llama nombre y tiene edad años")*/


}

