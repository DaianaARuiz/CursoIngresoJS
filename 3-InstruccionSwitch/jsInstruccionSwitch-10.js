/*Enunciado:
una agencia de viajes nos piden informar si hacemos viajes a lugares según 
la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/


function mostrar()
{
	/*
	var estacionIngresada =txtIdEstacion.value;
	var destinoElegido = txtIdDestino.value;

	if(puedeViajar==true)
	{
		alert("Se viaja");
	}else
	{
		alert("No se viaja");
	}
	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoElegido=="Bariloche")
			{
				alert("Se viaja");
			}else
			{
				alert("No se viaja");
			}
			break;
		case "Verano":
			if(destinoElegido== "Mar del plata" || destinoElegido=="Cataratas")
			{
				alert("Se viaja");
			}else
			{
				alert("No se viaja");
			}
			break;
		case "Primavera":
			if(destinoElegido=="Bariloche")
			{
				alert("No se viaja");
			}else
			{
				alert("Se viaja");
			}
			break;
		default:
			alert("Se viaja");
			break;
	}
	
	
}//FIN DE LA FUNCIÓN 

*/


	var estacionIngresada =txtIdEstacion.value;
	var destinoElegido = txtIdDestino.value;

	var seViaja= false; 

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoElegido=="Bariloche")
			{
				seViaja=true;
			}
			break;
		case "Verano":
			if(destinoElegido== "Mar del plata" || destinoElegido=="Cataratas")
			{
				seViaja=true;
			}
			break;
		case "Primavera":
			if(destinoElegido!="Bariloche")
			{
				seViaja=true;
			}
			break;
	}

	if(seViaja==true)
		{
			alert("Se viaja");
		}else
		{
			alert("No se viaja");
		}
}	