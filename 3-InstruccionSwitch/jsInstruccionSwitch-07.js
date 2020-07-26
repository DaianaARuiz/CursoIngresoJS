/*Al selecionar un destino , indicar el punto cardinal 
de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Al sur del pais");
			break;
		case "Cataratas":
			alert("Al Norte del pais");
			break;
		case "Mar del plata":
			alert("Al Este del pais");
			break;
		case "Ushuaia":
			alert("Al Sur del pais");
			break;
	}



}//FIN DE LA FUNCIÓN