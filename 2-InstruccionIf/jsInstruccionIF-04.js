/*Al ingresar una edad debemos informar 
si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/

function mostrar()
{
	var edadIngresada;

	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(txtIdEdad);


	/* if(edadIngresada<12)
	{
		 adolescentey mayores
		
		if(edadIngresada<18)
		{
			alert("Usted es un adolecente")
		}
	} 

	Como no tengo codigo de por medio, puedo 
	ponerlo junto con && de la siguiente manera:
	*/


	if(edadIngresada<18 && edadIngresada>12)
	{
		alert("adolecente");
	}





}//FIN DE LA FUNCIÓN