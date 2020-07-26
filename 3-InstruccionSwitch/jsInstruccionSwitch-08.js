function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		{
			alert("Acá hace frio");
		}
		break;
		default:
		{
			alert("Acá hace calor")
		}
		break;
	}
}//FIN DE LA FUNCIÓN